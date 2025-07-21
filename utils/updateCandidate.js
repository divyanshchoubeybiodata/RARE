// app/actions.js
'use server'

import Candidate from '../models/Candidate'
import connect from './db'

export async function updateCandidate(userId, updatedCandidateData) {
  try {
    await connect()
    // Find the candidate by userId
    const candidate = await Candidate.findOne({ userid: userId })

    if (!candidate) {
      throw new Error(`Candidate with user ID ${userId} not found`)
    }

    // Update the candidate with the provided data
    candidate.firstName = updatedCandidateData.firstName || candidate.firstName
    candidate.lastName = updatedCandidateData.lastName || candidate.lastName
    candidate.education = updatedCandidateData.education || candidate.education
    candidate.mobileNumber = updatedCandidateData.mobileNumber || candidate.mobileNumber
    candidate.isPan = updatedCandidateData.isPan || candidate.isPan
    candidate.panNumber = updatedCandidateData.panNumber || candidate.panNumber
    candidate.isAadhar = updatedCandidateData.isAadhar || candidate.isAadhar
    candidate.aadharNumber = updatedCandidateData.aadharNumber || candidate.aadharNumber
    candidate.resumeUrl = updatedCandidateData.resumeUrl || candidate.resumeUrl
    candidate.isExperience = updatedCandidateData.isExperience || candidate.isExperience
    candidate.currentCtc = updatedCandidateData.currentCtc || candidate.currentCtc
    candidate.state = updatedCandidateData.state || candidate.state
    candidate.city = updatedCandidateData.city || candidate.city

    // Save the updated candidate
    const updatedCandidate = await candidate.save()

    return { success: true, message: 'Candidate updated successfully', updatedCandidate }
  } catch (error) {
    console.error(error)
    return { success: false, message: error.message }
  }
}