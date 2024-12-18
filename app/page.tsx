'use client'

import { Button } from "@/components/ui/button"
import { Heart, Menu, PawPrintIcon as Paw, X } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="min-h-screen bg-[#FFF8F0]">
      {/* Navbar */}
      <header className="fixed top-0 w-full bg-white/95 shadow-sm z-50 px-4 lg:px-6">
        <div className="container mx-auto">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <Paw className="h-6 w-6 text-[#FF6B6B]" />
              <span className="text-xl font-bold">Yorkie911 Rescue</span>
            </div>
            
            {/* Mobile menu button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 text-gray-600 hover:text-gray-900"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6">
              <Link
                href="/"
                className="text-sm font-medium hover:text-[#FF6B6B] transition-colors"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-sm font-medium hover:text-[#FF6B6B] transition-colors"
              >
                About Us
              </Link>
              <Link
                href="/adopt"
                className="text-sm font-medium hover:text-[#FF6B6B] transition-colors"
              >
                Adopt
              </Link>
              <Link
                href="/surrender"
                className="text-sm font-medium hover:text-[#FF6B6B] transition-colors"
              >
                Surrender
              </Link>
              <Link
                href="/events"
                className="text-sm font-medium hover:text-[#FF6B6B] transition-colors"
              >
                Events
              </Link>
              <Link
                href="/volunteer"
                className="text-sm font-medium hover:text-[#FF6B6B] transition-colors"
              >
                Volunteer
              </Link>
              <Button
                asChild
                className="bg-[#FF6B6B] hover:bg-[#FF6B6B]/90"
              >
                <Link href="/donate">
                  <Heart className="mr-2 h-4 w-4" />
                  Donate
                </Link>
              </Button>
            </nav>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="lg:hidden py-4 border-t">
              <div className="flex flex-col gap-4">
                <Link
                  href="/"
                  className="text-sm font-medium hover:text-[#FF6B6B] transition-colors"
                  onClick={toggleMenu}
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="text-sm font-medium hover:text-[#FF6B6B] transition-colors"
                  onClick={toggleMenu}
                >
                  About Us
                </Link>
                <Link
                  href="/adopt"
                  className="text-sm font-medium hover:text-[#FF6B6B] transition-colors"
                  onClick={toggleMenu}
                >
                  Adopt
                </Link>
                <Link
                  href="/surrender"
                  className="text-sm font-medium hover:text-[#FF6B6B] transition-colors"
                  onClick={toggleMenu}
                >
                  Surrender
                </Link>
                <Link
                  href="/events"
                  className="text-sm font-medium hover:text-[#FF6B6B] transition-colors"
                  onClick={toggleMenu}
                >
                  Events
                </Link>
                <Link
                  href="/volunteer"
                  className="text-sm font-medium hover:text-[#FF6B6B] transition-colors"
                  onClick={toggleMenu}
                >
                  Volunteer
                </Link>
                <Button
                  asChild
                  className="bg-[#FF6B6B] hover:bg-[#FF6B6B]/90 w-full"
                >
                  <Link href="/donate">
                    <Heart className="mr-2 h-4 w-4" />
                    Donate
                  </Link>
                </Button>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 lg:pt-32 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl lg:text-6xl font-bold tracking-tighter mb-4">
                Give a Yorkie a Forever Home
              </h1>
              <p className="text-lg text-gray-600 mb-8 max-w-[600px] mx-auto lg:mx-0">
                Founded in July 2010, we're dedicated to rescuing, vetting, and re-homing Yorkshire terriers and other small breed dogs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  asChild
                  size="lg"
                  className="bg-[#FF6B6B] hover:bg-[#FF6B6B]/90"
                >
                  <Link href="/adopt">
                    Meet Our Dogs
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                >
                  <Link href="/volunteer">
                    Become a Volunteer
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] lg:h-[500px]">
              <Image
                src="https://png.pngtree.com/thumb_back/fh260/background/20230421/pngtree-yorkshire-terrier-puppy-with-its-hair-up-in-pink-and-blue-image_2480586.jpg"
                alt="Happy Yorkie"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>

        {/* Decorative paw prints */}
        <div className="absolute top-1/2 left-4 transform -translate-y-1/2 opacity-10">
          <Paw className="h-12 w-12 text-[#FF6B6B]" />
        </div>
        <div className="absolute bottom-1/4 right-4 opacity-10">
          <Paw className="h-12 w-12 text-[#FF6B6B]" />
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600 mb-8">
              Our mission is to rescue and ultimately find the perfect adoptive home for Yorkshire terriers and other small breed dogs in our care. We are committed to raising awareness throughout our community about Yorkies and other small breed dogs.
            </p>
            <div className="grid sm:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <div className="bg-[#FF6B6B]/10 p-4 rounded-full mb-4">
                  <Heart className="h-6 w-6 text-[#FF6B6B]" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Rescue</h3>
                <p className="text-gray-600">Saving one dog at a time</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-[#FF6B6B]/10 p-4 rounded-full mb-4">
                  <Paw className="h-6 w-6 text-[#FF6B6B]" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Care</h3>
                <p className="text-gray-600">Providing medical attention and love</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-[#FF6B6B]/10 p-4 rounded-full mb-4">
                  <Heart className="h-6 w-6 text-[#FF6B6B]" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Adopt</h3>
                <p className="text-gray-600">Finding forever homes</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Charlotte Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px]">
              <Image
                src="https://s3.amazonaws.com/imagesroot.rescuegroups.org/webpages/s4255ncfe8dux4wo.jpg"
                alt="Charlotte - Our Ambassadog"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Meet Charlotte - Our "Ambassadog"
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Charlotte, our Ambassadog, is the sweetest of Yorkies. Found as a stray with a damaged front leg, she never let that slow her down. Her spirit and resilience represent everything we stand for at Yorkie911 Rescue.
              </p>
              <Button
                asChild
                className="bg-[#FF6B6B] hover:bg-[#FF6B6B]/90"
              >
                <Link href="/about">
                  Read Charlotte's Story
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-[#FF6B6B]/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Make a Difference Today
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Whether you're looking to adopt, volunteer, or donate, your support helps us continue our mission of saving and rehoming Yorkshire terriers and other small breed dogs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-[#FF6B6B] hover:bg-[#FF6B6B]/90"
            >
              <Link href="/donate">
                <Heart className="mr-2 h-4 w-4" />
                Make a Donation
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
            >
              <Link href="/volunteer">
                Become a Volunteer
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Paw className="h-6 w-6 text-[#FF6B6B]" />
                <span className="text-xl font-bold">Yorkie911 Rescue</span>
              </div>
              <p className="text-gray-600">
                A nonprofit 501(c)(3) organization dedicated to rescuing and rehoming Yorkshire terriers.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-gray-600 hover:text-[#FF6B6B]">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/adopt" className="text-gray-600 hover:text-[#FF6B6B]">
                    Adopt
                  </Link>
                </li>
                <li>
                  <Link href="/surrender" className="text-gray-600 hover:text-[#FF6B6B]">
                    Surrender
                  </Link>
                </li>
                <li>
                  <Link href="/volunteer" className="text-gray-600 hover:text-[#FF6B6B]">
                    Volunteer
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Email: info@yorkie911rescue.org</li>
                <li>Phone: (555) 123-4567</li>
                <li>Location: New York, NY</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Newsletter</h3>
              <p className="text-gray-600 mb-4">
                Subscribe to our newsletter for updates on our rescue efforts.
              </p>
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 border rounded-md"
                />
                <Button type="submit" className="bg-[#FF6B6B] hover:bg-[#FF6B6B]/90">
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
          <div className="border-t mt-12 pt-8 text-center text-gray-600">
            <p>© {new Date().getFullYear()} Yorkie911 Rescue, Inc. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

