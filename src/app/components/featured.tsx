import Image from "next/image";

const posts = [
  {
    id: 1,
    title: 'Houston expands assistance to cover $5 trash fee citywide',
    href: 'https://defendernetwork.com/news/local-state/houston-expands-assistance-to-cover-5-trash-fee-citywide/',
    description:'Houston expands utility assistance, helping eligible residents offset a $5 garbage fee beginning this August.',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'Local & State', href: '#' },
    author: {
      name: 'Tannistha Sinha',
      role: 'Writer @ DefenderNetwork',
      href: 'https://defendernetwork.com/author/tannistha/',
      imageUrl:
        'https://defendernetwork.com/wp-content/uploads/2024/02/cropped-Photo_TANNISTHA-SINHA-1-120x120.jpg',
    },
  },
  {
    id: 2,
    title: 'July 5th, other lost Black holidays deserve observance',
    href: 'https://defendernetwork.com/news/national/july-5th-other-lost-black-holidays-deserve-observance/',
    description: 'Here’s a compelling look at forgotten Black liberation holidays that deserve modern revival and observance.',
    date: 'Mar 10, 2020',
    datetime: '2020-03-10',
    category: { title: 'National', href: '#' },
    author: {
      name: 'Aswad Walker',
      role: 'Writer @ DefenderNetwork',
      href: 'https://defendernetwork.com/author/aswad-walker/',
      imageUrl:
        'https://defendernetwork.com/wp-content/uploads/2023/03/aswad-120x120.jpeg',
    },
  },
  {
    id: 3,
    title: 'TSU professor outlines work America at 250 demands',
    href: 'https://defendernetwork.com/news/national/tsu-professor-outlines-work-america-at-250-demands/',
    description:
      'A political scientist reflects on the ongoing struggle to fulfill America’s promise of equality.',
    date: 'Feb 12, 2020',
    datetime: '2020-02-12',
    category: { title: 'Opinion', href: '#' },
    author: {
      name: 'Joshua',
      role: 'Copied this from somewhere else',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
]

export function Featured() {
  return (

    
    <div className="mb-4">
      <h1 className="font-bold text-2xl mb-2">Featured Content</h1>
       <div className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl">From the blog</h2>
          <p className="mt-2 text-lg/8 text-gray-300">Learn how to grow your business with our expert advice.</p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-700 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={post.datetime} className="text-gray-400">
                  {post.date}
                </time>
                <a
                  href={post.category.href}
                  className="relative z-10 rounded-full bg-gray-800/60 px-3 py-1.5 font-medium text-gray-300 hover:bg-gray-800"
                >
                  {post.category.title}
                </a>
              </div>
              <div className="group relative grow">
                <h3 className="mt-3 text-lg/6 font-semibold text-white group-hover:text-gray-300">
                  <a href={post.href}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm/6 text-gray-400">{post.description}</p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4 justify-self-end">
                <img alt="" src={post.author.imageUrl} className="size-10 rounded-full bg-gray-800" />
                <div className="text-sm/6">
                  <p className="font-semibold text-white">
                    <a href={post.author.href}>
                      <span className="absolute inset-0" />
                      {post.author.name}
                    </a>
                  </p>
                  <p className="text-gray-400">{post.author.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>



    </div>
   
  )
}