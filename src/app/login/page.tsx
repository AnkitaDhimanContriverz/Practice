'use client';
import React from 'react';
import LoginForm from '@/components/LoginForm';

interface FormData {
    [key: string]: any;
}

export default function Page() {
    const handleSubmit = (formData: FormData) => {
        console.log(formData);
    };

    return (
        <div>
            <LoginForm onSubmit={handleSubmit} />
        </div>
    );
}
