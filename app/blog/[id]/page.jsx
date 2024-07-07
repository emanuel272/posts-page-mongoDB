// const getPost = async (id) => {
//     const res = await fetch(https://jsonplaceholder.typicode.com/posts/${id});

//     if (!res.ok) {
//         throw new Error('Something went wrong');
//     }
//     return res.json();
// }

import { getPost } from '../../../utils/mongodata';

const BlogPost = async ({ params }) => {

    console.log(params);

    const { id } = params;
    console.log(id);

    const post = await getPost(id);
    console.log(post);

    return (
        <section className="gap-10">
            <h1 className="text-white text-6xl mb-10">{post?.title}</h1>
            <p className="text-white/40 text-2xl">{post?.description}</p>
        </section>
    )
}

export default BlogPost