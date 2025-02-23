import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import AuthLayout from "@/components/auth-layout"
import Link from 'next/link'

export default function SignUpPage() {
  async function handleSubmit(formData: FormData) {
    'use server'
    // Here you would handle the sign-up logic
    console.log('Sign up submitted', Object.fromEntries(formData))
  }

  return (
    <AuthLayout title="Sign Up">
      <form action={handleSubmit} className="mt-8 space-y-6">
        <div className="space-y-4">
          <div>
            <Label htmlFor="first-name">First Name</Label>
            <Input
              id="first-name"
              name="firstName"
              type="text"
              required
              className="mt-1"
              placeholder="First Name"
            />
          </div>
          <div>
            <Label htmlFor="last-name">Last Name</Label>
            <Input
              id="last-name"
              name="lastName"
              type="text"
              required
              className="mt-1"
              placeholder="Last Name"
            />
          </div>
          <div>
            <Label htmlFor="email-address">Email address</Label>
            <Input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="mt-1"
              placeholder="Email address"
            />
          </div>
          <div>
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              name="password"
              type="password"
              autoComplete="new-password"
              required
              className="mt-1"
              placeholder="Password"
            />
          </div>
        </div>

        <div>
          <Button type="submit" className="w-full">
            Sign Up
          </Button>
        </div>
      </form>

      <div className="mt-4 text-center">
        <p className="text-sm text-gray-600">
          Already have an account?{' '}
          <Link href="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
            Log in
          </Link>
        </p>
      </div>

      <div className="mt-6">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">Or continue with</span>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3">
          <div>
            <Button variant="outline" className="w-full">
              Google
            </Button>
          </div>
          <div>
            <Button variant="outline" className="w-full">
              Facebook
            </Button>
          </div>
        </div>
      </div>
    </AuthLayout>
  )
}