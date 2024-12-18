import { Button } from "@/components/ui/button"
import { PawPrintIcon } from 'lucide-react'
import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#FFF8F0] flex items-center justify-center">
      <div className="text-center space-y-6 p-8">
        <div className="flex justify-center">
          <PawPrintIcon className="h-24 w-24 text-[#FF6B6B]" />
        </div>
        <h1 className="text-4xl font-bold">Page Under Development</h1>
        <p className="text-gray-600 max-w-md mx-auto">
          This is a demo site, so some pages may not be accessible yet. We appreciate your patience as we continue building and improving!
        </p>
        <Button asChild className="bg-[#FF6B6B] hover:bg-[#FF6B6B]/90">
          <Link href="/">
            Return Home
          </Link>
        </Button>
      </div>
    </div>
  )
}

