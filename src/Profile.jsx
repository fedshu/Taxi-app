import React from 'react'
import { withAuth } from './AuthContext';

export const Profile = () => {
    return <>Profile</>
}

export const ProfileWithAuth = withAuth(Profile)