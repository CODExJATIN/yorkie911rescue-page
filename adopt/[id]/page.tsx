import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Dog, Heart, Printer } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

// This would typically come from an API/database
const dogData = {
  id: 1,
  name: "BamBam",
  status: "Available for Adoption",
  statusNote: "(adoption pending)",
  breed: "Yorkshire Terrier Yorkie / Mixed (short coat)",
  species: "Dog",
  sex: "Male",
  age: "Young",
  size: "Small",
  currentSize: "5 Pounds",
  currentAge: "3 Years 3 Months (best estimate)",
  description: "BamBam is a playful young pup who thrives on attention and energy. With his lively spirit, he'd be a perfect match for an active family ready for fun and adventure",
  adoptionFee: 475,
  compatibility: {
    dogs: true,
    cats: false,
    kids: true
  },
  images: [
    "/placeholder.svg",
    "/placeholder.svg",
    "/placeholder.svg"
  ]
}

export default function DogDetailPage() {
  return (
    <div className="min-h-screen bg-[#FFF8F0] pt-24">
      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column - Images */}
          <div className="space-y-6">
            <div className="relative aspect-square overflow-hidden rounded-lg">
              <Image
                src={dogData.images[0]}
                alt={dogData.name}
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {dogData.images.slice(1).map((image, index) => (
                <div key={index} className="relative aspect-square overflow-hidden rounded-lg">
                  <Image
                    src={image}
                    alt={`${dogData.name} ${index + 2}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Details */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                <span>{dogData.breed}</span>
                <span>::</span>
                <span>{dogData.sex}</span>
                <span>::</span>
                <span>{dogData.age}</span>
                <span>::</span>
                <span>{dogData.size}</span>
              </div>
              
              <h1 className="text-4xl font-bold mb-4">{dogData.name}</h1>
              
              <p className="text-lg text-[#FF6B6B] italic mb-6">
                "I would love you more than you can imagine."
              </p>

              <div className="flex gap-4 mb-6">
                <Button asChild variant="outline">
                  <Link href={`/breed-info/yorkshire-terrier`}>
                    <Dog className="mr-2 h-4 w-4" />
                    Learn about {dogData.breed.split('/')[0].trim()}
                  </Link>
                </Button>
                <Button variant="outline">
                  <Printer className="mr-2 h-4 w-4" />
                  Print Adoption Flyer
                </Button>
              </div>
            </div>

            <Card>
              <CardContent className="p-6 space-y-4">
                <div>
                  <h2 className="text-xl font-semibold mb-2">About {dogData.name}</h2>
                  <div className="space-y-2 text-sm">
                    <p>
                      <span className="font-semibold">Status:</span>{" "}
                      {dogData.status} {dogData.statusNote}{" "}
                      <Link href="/adoption-info" className="text-[#FF6B6B] hover:underline">
                        (adoption info)
                      </Link>
                    </p>
                    <p><span className="font-semibold">Species:</span> {dogData.species}</p>
                    <p><span className="font-semibold">Current Size:</span> {dogData.currentSize}</p>
                    <p><span className="font-semibold">Current Age:</span> {dogData.currentAge}</p>
                  </div>
                </div>

                <Separator />

                <div>
                  <p className="text-gray-600">{dogData.description}</p>
                </div>

                <Separator />

                <div>
                  <h2 className="text-xl font-semibold mb-2">More about {dogData.name}</h2>
                  <div className="flex gap-2">
                    <Badge variant="outline" className="bg-green-50">
                      {dogData.compatibility.dogs ? "Good" : "Not Good"} with Dogs
                    </Badge>
                    <Badge variant="outline" className="bg-red-50">
                      {dogData.compatibility.cats ? "Good" : "Not Good"} with Cats
                    </Badge>
                    <Badge variant="outline" className="bg-green-50">
                      {dogData.compatibility.kids ? "Good" : "Not Good"} with Kids
                    </Badge>
                  </div>
                </div>

                <Separator />

                <div>
                  <p className="font-semibold">Adoption fee: ${dogData.adoptionFee}</p>
                </div>

                <Button className="w-full bg-[#FF6B6B] hover:bg-[#FF6B6B]/90">
                  <Heart className="mr-2 h-4 w-4" />
                  Start Adoption Process
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

