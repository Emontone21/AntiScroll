import { lessons } from '@/lib/lessons'
import LessonPageClient from './LessonPageClient'

export function generateStaticParams() {
  return lessons.map((lesson) => ({ id: lesson.id }))
}

export default function LessonPage({ params }: { params: Promise<{ id: string }> }) {
  return <LessonPageClient params={params} />
}
