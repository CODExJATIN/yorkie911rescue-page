import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination"
import { Bone } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

// This would typically come from an API or database
const dogs = [
  {
    id: 1,
    name: "BamBam",
    status: "Available",
    statusNote: "(adoption pending)",
    breed: "Yorkshire Terrier Yorkie / Mixed (short coat)",
    species: "Dog",
    sex: "Male",
    description: "BamBam is a playful young pup who thrives on attention and energy. With his lively spirit, he'd be a perfect match for an active family ready for fun and adventure",
    adoptionFee: 475,
    image: "/placeholder.svg"
  },
  {
    id: 2,
    name: "Bernard",
    status: "Available",
    breed: "Chihuahua (short coat)",
    species: "Dog",
    sex: "Male",
    description: "Meet Bernard, a sweet long-haired Chihuahua rescued alongside is brothers from a horrible hoarding situation. Bernard is the most shy of the group - he's curious and loves to follow you around, but can be a bit frightened when first handled. Once you have him in your lap he settles down and shows his sweet personality.",
    adoptionFee: 375,
    image: "/placeholder.svg"
  },
  {
    id: 3,
    name: "Boo",
    status: "Available",
    breed: "Yorkshire Terrier Yorkie (short coat)",
    species: "Dog",
    sex: "Female",
    description: "This tiny girl was found as a stray scared and alone. Boo just loves to cuddle and would love to have a lap to cuddle in.",
    adoptionFee: 375,
    image: "/placeholder.svg"
  },
  {
    id: 4,
    name: "Casper",
    status: "Available",
    breed: "Yorkshire Terrier Yorkie / Mixed (short coat)",
    species: "Dog",
    sex: "Male",
    description: "Update: Casper was brought back to the rescue only because he needs a single family home and not an apartment to live in. All the noises made him anxious and he would bark. Sadly the neighbors complained and he had to be returned. He is such a good boy and would love a home with a yard.",
    adoptionFee: 375,
    image: "/placeholder.svg"
  },
  {
    id: 5,
    name: "Chappy",
    status: "Sponsorship",
    breed: "Chihuahua (short coat)",
    species: "Dog",
    sex: "Male",
    description: "Chappy is a calm, mellow boy - not your typical chihuahua. He loves to snuggle on the couch but also likes to wander in the yard. Chappy will give you a big smile and loves to walk on a leash. He is happy getting treats and loves head rubs.",
    adoptionFee: 375,
    image: "/placeholder.svg"
  }
]

export default function AdoptPage() {
  return (
    <div className="min-h-screen bg-[#FFF8F0] pt-24">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Available for Adoption or Sponsorship</h1>
          <div className="flex items-center justify-center gap-2 text-[#FF6B6B]">
            <Bone className="h-5 w-5" />
            <Bone className="h-5 w-5" />
            <Bone className="h-5 w-5" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {dogs.map((dog) => (
            <Card key={dog.id} className="overflow-hidden">
              <CardHeader className="p-0">
                <div className="relative h-64">
                  <Image
                    src={dog.image}
                    alt={dog.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h2 className="text-2xl font-bold">{dog.name}</h2>
                    {dog.statusNote && (
                      <span className="text-sm text-gray-500">{dog.statusNote}</span>
                    )}
                  </div>
                  <Badge 
                    variant={dog.status === "Sponsorship" ? "outline" : "default"}
                    className={dog.status === "Available" ? "bg-[#FF6B6B]" : ""}
                  >
                    {dog.status}
                  </Badge>
                </div>
                <div className="space-y-2 mb-4">
                  <p className="text-sm">
                    <span className="font-semibold">Breed:</span> {dog.breed}
                  </p>
                  <p className="text-sm">
                    <span className="font-semibold">Species/Sex:</span> {dog.species}/{dog.sex}
                  </p>
                </div>
                <p className="text-sm text-gray-600 line-clamp-3">
                  {dog.description}
                </p>
                <div className="mt-6 flex justify-end">
                  <Button
                    asChild
                    className="bg-[#FF6B6B] hover:bg-[#FF6B6B]/90"
                  >
                    <Link href={`/adopt/${dog.id}`}>
                      More Info
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">4</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">5</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">6</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  )
}

