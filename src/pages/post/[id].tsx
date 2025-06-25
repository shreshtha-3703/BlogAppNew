import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Navbar from '@/components/Navbar';

interface Post {
    id: string;
    title: string;
    description: string;
    content: string;
}

export default function PostDetail() {
    const router = useRouter();
    const { id } = router.query;
    const [post, setPost] = useState<Post>();

    useEffect(() => {
        if (!id) return;

        const saved = localStorage.getItem('posts');
        if (saved) {
            const savedNew: Post[] = JSON.parse(saved);
            const idSearch = savedNew.find((p: any) => p.id === id);
            setPost(idSearch);
        }
    }, [id]);



    if (!post) {
        return <div className="p-4">Loading...</div>;
    }


    return (
        <div className="p-4">
            <Navbar />
            <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
            <p className="text-gray-700 mb-4">{post.description}</p>
            <p>{post.content}</p>
        </div>
    );
}
