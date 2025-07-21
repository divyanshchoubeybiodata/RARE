// utils/deleteAgency.js
'use server'


import JobPost from '../models/JobPost'
import connect from './db'


export async function deleteJobPost(jobId) {
  try {
    await connect()
    // Find the agency by ID
    const jobPost = await JobPost.findById(jobId)

    if (!jobPost) {
      throw new Error(`Job Post with ID ${jobId} not found`)
    }

   
    // Delete the Jobpost
    await JobPost.deleteOne({ _id: jobPost._id })

    

    return { success: true, message: 'JobPost Deleted Successfully' }
  } catch (error) {
    console.error(error)
    return { success: false, message: error.message }
  }
}