import { s3Config } from "./aws-config"

// This is a client-side utility for generating pre-signed URLs
// In a real application, you would use AWS SDK on the server side

export async function getPresignedUploadUrl(fileName: string, contentType: string, folder = "images/") {
  try {
    // In a real app, this would be an API call to your backend
    // which would use AWS SDK to generate a pre-signed URL
    const response = await fetch("/api/get-upload-url", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fileName,
        contentType,
        folder,
      }),
    })

    if (!response.ok) {
      throw new Error("Failed to get upload URL")
    }

    const data = await response.json()
    return data.url
  } catch (error) {
    console.error("Error getting presigned URL:", error)
    throw error
  }
}

export async function uploadToS3(file: File, folder = "images/"): Promise<string> {
  try {
    // Get a pre-signed URL for uploading
    const fileName = `${Date.now()}-${file.name}`
    const url = await getPresignedUploadUrl(fileName, file.type, folder)

    // Upload the file directly to S3 using the pre-signed URL
    const uploadResponse = await fetch(url, {
      method: "PUT",
      body: file,
      headers: {
        "Content-Type": file.type,
      },
    })

    if (!uploadResponse.ok) {
      throw new Error("Failed to upload file")
    }

    // Return the public URL of the uploaded file
    // In a real app, this would be constructed based on your S3 bucket configuration
    return `https://${s3Config.buckets.userUploads}.s3.${s3Config.region}.amazonaws.com/${folder}${fileName}`
  } catch (error) {
    console.error("Error uploading to S3:", error)
    throw error
  }
}

export async function getS3Object(key: string, bucket: string = s3Config.buckets.blogContent): Promise<string> {
  try {
    // In a real app, this would be an API call to your backend
    // which would use AWS SDK to get the object or generate a pre-signed URL
    const response = await fetch(
      `/api/get-s3-object?key=${encodeURIComponent(key)}&bucket=${encodeURIComponent(bucket)}`,
    )

    if (!response.ok) {
      throw new Error("Failed to get S3 object")
    }

    const data = await response.json()
    return data.url || data.content
  } catch (error) {
    console.error("Error getting S3 object:", error)
    throw error
  }
}

