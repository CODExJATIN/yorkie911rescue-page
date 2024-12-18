import { Card, CardContent } from "@/components/ui/card"
import { Bone, PawPrint } from 'lucide-react'
import Image from "next/image"

const boardMembers = [
  {
    name: "Heidi Walker",
    image: "https://s3.amazonaws.com/imagesroot.rescuegroups.org/webpages/s4255n5rw0t00bdc.jpg",
    title: "President",
    bio: "Heidi entered the world of rescue as a volunteer for a PA based group, and spent several years building a foster network on Long Island. Her own first foster was a dog she pulled in mid-winter from a shelter in upstate New York. The mussed and matted YorkiePoo smelled so badly that, to keep from gagging, Heidi wrapped her in several towels and drove home with the windows open. A thorough cleaning revealed a very beautiful and very sweet little girl named Leah. After her swift adoption, Heidi's home became – and remains -- a revolving door for foster dogs (usually several at one time)..."
  },
  {
    name: "Dr. Deborah Wheat",
    title: "DVM Advisor",
    image: "https://s3.amazonaws.com/imagesroot.rescuegroups.org/webpages/s4255n9h0uofiiij.jpg",
    bio: "Dr. Deborah Wheat began her veterinary career as a young woman in her hometown of Baldwin, Long island. She loved the animals of her neighbors and soon started work at various animal hospitals and groomers in the area. After high school, Dr. Wheat received her Bachelors of Science Degree from Hofstra University. She went on to receive her Doctorate of Veterinary Medicine from Ross University School of Veterinary Medicine in 2004..."
  },
  {
    name: "Sophie Cardone",
    title: "Advisor",
    image: "https://s3.amazonaws.com/imagesroot.rescuegroups.org/webpages/s4255nodyp4rcsx6.jpg",
    bio: "Sophie's lifelong passion for animals began in childhood with her adored Fox Terrier. Her long list of doggy loves has included such diverse breeds as Rottis, Dobies and Shepherds, Irish Wolfhounds, Chihuahuas and Yorkies. After meeting Heidi in the corporate world, they learned they had something in common: their compassion for animals in need..."
  },
  {
    name: "Angela Cano",
    title: "Secretary",
    image: "https://s3.amazonaws.com/imagesroot.rescuegroups.org/webpages/s4255nginhaakn0w.jpg",
    bio: "To say that Angela Cano wears many hats would be an understatement. After leaving the corporate travel world behind, the lifelong animal lover put her passion for all things dog into compassionate and constructive good use by joining Yorkie911 Rescue in 2011. Why? Because in Heidi Walker, she had found a kindred spirit and a friend..."
  },
  {
    name: "Nicole Kurek",
    title: "Treasurer",
    image: "https://s3.amazonaws.com/imagesroot.rescuegroups.org/webpages/s4255nwv1gxiz3dv.jpg",
    bio: "Her favorite quotation is: \"It is our choices that show what we truly are, far more than our abilities.\" And Nicole is living proof of that. She readily admits never knowing the love of an animal until she got her first two Yorkies in 2005..."
  },
  {
    name: "Mary Patmidis-Goodrow",
    title: "Director of Social Media",
    image: "https://s3.amazonaws.com/imagesroot.rescuegroups.org/webpages/s4255ngvmufcvze3.jpg",
    bio: "Mary's extensive background in the corporate world made her a natural networker, enabling her to bring her creative expertise to our world of rescue. In June 2012, she attended her first \"Rescues Rock the Runway\" event and after meeting Heidi, she never looked back..."
  }
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#FFF8F0] pt-24">
      <div className="container mx-auto px-4 py-8">
        {/* About Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">About Us</h1>
            <div className="flex items-center justify-center gap-2 text-[#FF6B6B]">
              <Bone className="h-5 w-5" />
              <Bone className="h-5 w-5" />
              <Bone className="h-5 w-5" />
            </div>
          </div>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-gray-600 mb-8">
              Founded in July 2010, Yorkie911 Rescue, Inc is a nonprofit 501(c)(3) organization comprised of dedicated volunteers who are passionate about rescuing, vetting, and re-homing Yorkshire terriers and other small breed dogs. Given our many years in rescue, we've come to realize that saving every needy dog is impossible, but we remain forever grateful for the ones we do save.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="mb-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600">
              Our mission is to rescue and ultimately find the perfect adoptive home for the Yorkshire terriers and other small breed dogs in our care. We are also committed to raising awareness throughout our community about the Yorkie and other small breed dogs.
            </p>
          </div>
        </section>

        {/* Charlotte Section */}
        <section className="mb-16">
          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold">Meet Charlotte - our "Ambassadog"</h2>
                  <p className="text-gray-600">(2010 - 2018)</p>
                  <div className="space-y-6">
                    <div className="relative h-64 rounded-lg overflow-hidden">
                      <Image
                        src="https://s3.amazonaws.com/imagesroot.rescuegroups.org/webpages/s4255nkcmzinnpnp.jpg"
                        alt="Charlotte one week after surgery"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <p className="text-sm text-gray-500 italic">One week after surgery</p>
                  </div>
                </div>
                <div className="space-y-6">
                  <p className="text-gray-600">
                    Charlotte, our Ambassadog, is the sweetest of Yorkies. We can't thank Dori and her staff at Save-A-Pet enough for bringing her into our lives. Found as a stray at a construction site in Queens, NY, with a damaged and dangling front leg, it was promptly amputated. And yet, she doesn't miss it at all, keeping up with the rest of the pack with sassiness, spirit and spunk.
                  </p>
                  <p className="text-gray-600">
                    She absolutely adores people and thrives, in true doggy diva fashion, on being the center of attention. We at Yorkie911 Rescue couldn't have asked for a better representative to highlight who we are and what we do.
                  </p>
                  <p className="text-lg font-semibold text-[#FF6B6B] italic">
                    And so, WE thank YOU, Charlotte, for rescuing US.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Board Section */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Meet Our Board of Directors</h2>
            <div className="flex items-center justify-center gap-2 text-[#FF6B6B]">
              <PawPrint className="h-5 w-5" />
              <PawPrint className="h-5 w-5" />
              <PawPrint className="h-5 w-5" />
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {boardMembers.map((member, index) => (
              <Card key={index}>
  <CardContent className="p-6">
    <div className="relative h-0 pb-[100%] mb-4 rounded-lg overflow-hidden">
      <Image
        src={member.image}
        alt={member.name}
        fill
        className="object-cover"
      />
    </div>
    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
    <p className="text-[#FF6B6B] font-medium mb-4">{member.title}</p>
    <p className="text-gray-600 text-sm line-clamp-6">{member.bio}</p>
  </CardContent>
</Card>

            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

