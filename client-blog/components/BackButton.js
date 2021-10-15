import { useRouter } from 'next/router'

export default function BackButton() {
    const router = useRouter()
    return (
        <button type="button" onClick={() => router.back()}>Go back</button>
    )
}