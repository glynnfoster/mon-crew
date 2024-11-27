import { teamMembers, TeamMember } from '../../data/team'
import Link from 'next/link'
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Quote } from 'lucide-react'
import SkillBadge from '@/components/skill-badge'

export async function generateStaticParams() {
  return teamMembers.map((member) => ({
    id: member.id,
  }))
}

export default function TeamMemberPage({ params }: { params: { id: string } }) {
  const member = teamMembers.find((m) => m.id === params.id) as TeamMember

  if (!member) {
    return <div className="text-center text-2xl text-red-600">Team member not found</div>
  }

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <Link 
        href="/" 
        className="inline-flex items-center text-sm text-neutral-600 hover:text-neutral-900"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Team
      </Link>
      
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">{member.name}</h1>
        <p className="text-xl text-neutral-600">{member.role}</p>
      </div>

      <Card className="bg-white/50 backdrop-blur-sm border-neutral-200">
        <CardContent className="p-8">
          <div className="space-y-6">            
            <div className="flex flex-wrap gap-2 my-4">
              {member.skills.map((skill) => (
                <SkillBadge key={skill} skill={skill} />
              ))}
            </div>
            <div 
              className="text-neutral-600 prose prose-neutral max-w-none  space-y-4"
              dangerouslySetInnerHTML={{ __html: member.bio }}
            />
            <div className="flex space-x-4">
              {member.email && (
                <a href={`mailto:${member.email}`} className="text-neutral-600 hover:text-neutral-900">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                  <span className="sr-only">Email</span>
                </a>
              )}
              {member.linkedin && (
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-neutral-600 hover:text-neutral-900">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd"></path>
                  </svg>
                  <span className="sr-only">LinkedIn</span>
                </a>
              )}
              {member.github && (
                <a href={member.github} target="_blank" rel="noopener noreferrer" className="text-neutral-600 hover:text-neutral-900">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd"></path>
                  </svg>
                  <span className="sr-only">GitHub</span>
                </a>
              )}
              {member.cv && (
                <a href={member.cv} target='_blank' download className="text-neutral-600 hover:text-neutral-900">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span className="sr-only">Download CV</span>
                </a>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">Testimonials</h2>
        {member.testimonials.map((testimonial, index) => (
          <Card key={index} className="bg-blue-50/50 border-blue-100">
            <CardContent className="p-8 relative">
              <div className="space-y-6">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                  <Quote className="h-5 w-5 text-blue-700" />
                </div>
                <blockquote className="text-lg text-neutral-700 italic pb-3">
                  {testimonial.quote}
                </blockquote>
              </div>
              <div className="absolute bottom-4 right-8 text-sm text-neutral-600 font-medium">
                - {testimonial.author}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

