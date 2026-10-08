import {
  Bell,
  Camera,
  Gamepad2,
  Home,
  MessageSquare,
  MoreHorizontal,
  Search,
  Settings,
  Share,
  ThumbsUp,
  User,
  Users,
  Video,
  MessageCircle
} from "lucide-react";

const stories = [
  { name: "Your Story", color: "from-sky-500 to-blue-600", avatar: "Y" },
  { name: "Ava", color: "from-pink-500 to-orange-400", avatar: "A" },
  { name: "Noah", color: "from-purple-500 to-indigo-500", avatar: "N" },
  { name: "Emma", color: "from-green-500 to-emerald-500", avatar: "E" },
  { name: "Liam", color: "from-yellow-500 to-red-500", avatar: "L" }
];

const posts = [
  {
    author: "Sarah Johnson",
    time: "2h ago",
    text: "Weekend vibes! Finally took a break and enjoyed the sunset. Feeling refreshed.",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
    likes: 128,
    comments: 24,
    shares: 7
  },
  {
    author: "Mark Lee",
    time: "4h ago",
    text: "Team meeting in progress. Built something awesome today.",
    image: null,
    likes: 86,
    comments: 12,
    shares: 3
  }
];

const contacts = ["Daniel", "Emily", "Maya", "James", "Sophia", "Olivia"];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f0f2f5] text-[#1c1e21]">
      <header className="sticky top-0 z-20 border-b border-[#e4e6eb] bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-lg font-bold text-white">
              f
            </div>
            <div className="flex items-center gap-2 rounded-full bg-[#f0f2f5] px-3 py-2">
              <Search className="h-4 w-4 text-[#65676b]" />
              <input
                placeholder="Search Facebook"
                className="w-36 bg-transparent text-sm outline-none placeholder:text-[#65676b]"
              />
            </div>
          </div>

          <nav className="hidden items-center gap-6 md:flex">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
              <Home className="h-5 w-5" />
            </div>
            <div className="flex h-12 w-12 items-center justify-center rounded-lg text-[#65676b] hover:bg-[#f0f2f5]">
              <Users className="h-5 w-5" />
            </div>
            <div className="flex h-12 w-12 items-center justify-center rounded-lg text-[#65676b] hover:bg-[#f0f2f5]">
              <Video className="h-5 w-5" />
            </div>
            <div className="flex h-12 w-12 items-center justify-center rounded-lg text-[#65676b] hover:bg-[#f0f2f5]">
              <Gamepad2 className="h-5 w-5" />
            </div>
          </nav>

          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f0f2f5] text-[#65676b]">
              <MessageSquare className="h-5 w-5" />
            </div>
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f0f2f5] text-[#65676b]">
              <Bell className="h-5 w-5" />
            </div>
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-600 font-bold text-white">
              S
            </div>
          </div>
        </div>
      </header>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 py-6 lg:grid-cols-[240px_minmax(0,1fr)_280px]">
        <aside className="hidden lg:block">
          <div className="space-y-4">
            <div className="flex items-center gap-3 rounded-xl bg-white p-3 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-600 font-bold text-white">
                S
              </div>
              <span className="font-semibold">Sarah</span>
            </div>

            <div className="space-y-2 text-sm text-[#65676b]">
              {[
                ["Friends", Users],
                ["Groups", Users],
                ["Marketplace", Camera],
                ["Watch", Video],
                ["Settings", Settings]
              ].map(([label, Icon]) => (
                <div key={String(label)} className="flex items-center gap-3 rounded-lg p-2 hover:bg-white">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f0f2f5]">
                    <Icon className="h-4 w-4 text-[#1c1e21]" />
                  </div>
                  <span>{String(label)}</span>
                </div>
              ))}
            </div>
          </div>
        </aside>

        <section className="space-y-6">
          <div className="rounded-2xl bg-white p-4 shadow-sm">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-600 text-sm font-bold text-white">
                S
              </div>
              <button className="flex-1 rounded-full bg-[#f0f2f5] px-4 py-3 text-left text-sm text-[#65676b] hover:bg-gray-200">
                What’s on your mind?
              </button>
            </div>

            <div className="grid grid-cols-3 gap-2 border-t border-[#e4e6eb] pt-3 text-sm font-medium text-[#65676b]">
              <button className="flex items-center justify-center gap-2 rounded-lg py-2 hover:bg-[#f0f2f5]">
                <Video className="h-5 w-5 text-red-500" />
                Live
              </button>
              <button className="flex items-center justify-center gap-2 rounded-lg py-2 hover:bg-[#f0f2f5]">
                <Camera className="h-5 w-5 text-green-500" />
                Photo
              </button>
              <button className="flex items-center justify-center gap-2 rounded-lg py-2 hover:bg-[#f0f2f5]">
                <User className="h-5 w-5 text-purple-500" />
                Feeling
              </button>
            </div>
          </div>

          <div className="flex gap-3 overflow-x-auto pb-2">
            {stories.map((story) => (
              <div key={story.name} className="min-w-[110px] overflow-hidden rounded-2xl bg-white shadow-sm">
                <div className={`h-24 bg-gradient-to-br ${story.color} p-2`}>
                  <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-white text-sm font-bold text-[#1c1e21]">
                    {story.avatar}
                  </div>
                </div>
                <div className="px-2 py-3 text-center text-sm font-medium">{story.name}</div>
              </div>
            ))}
          </div>

          {posts.map((post, index) => (
            <article key={`${post.author}-${index}`} className="rounded-2xl bg-white p-4 shadow-sm">
              <div className="mb-3 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-600 font-bold text-white">
                    {post.author[0]}
                  </div>
                  <div>
                    <p className="font-semibold">{post.author}</p>
                    <p className="text-xs text-[#65676b]">{post.time}</p>
                  </div>
                </div>
                <button className="rounded-full p-2 hover:bg-[#f0f2f5]">
                  <MoreHorizontal className="h-5 w-5 text-[#65676b]" />
                </button>
              </div>

              <p className="mb-3 text-sm leading-6">{post.text}</p>

              {post.image && (
                <img
                  src={post.image}
                  alt="Post"
                  className="h-80 w-full rounded-xl object-cover"
                />
              )}

              <div className="mt-3 flex items-center justify-between border-t border-[#e4e6eb] pt-3 text-sm text-[#65676b]">
                <div className="flex items-center gap-1">
                  <ThumbsUp className="h-4 w-4 text-blue-500" />
                  <span>{post.likes}</span>
                </div>
                <div className="flex items-center gap-4">
                  <span>{post.comments} comments</span>
                  <span>{post.shares} shares</span>
                </div>
              </div>

              <div className="mt-3 grid grid-cols-3 gap-2 border-t border-[#e4e6eb] pt-3">
                <button className="flex items-center justify-center gap-2 rounded-lg py-2 hover:bg-[#f0f2f5]">
                  <ThumbsUp className="h-4 w-4" />
                  Like
                </button>
                <button className="flex items-center justify-center gap-2 rounded-lg py-2 hover:bg-[#f0f2f5]">
                  <MessageCircle className="h-4 w-4" />
                  Comment
                </button>
                <button className="flex items-center justify-center gap-2 rounded-lg py-2 hover:bg-[#f0f2f5]">
                  <Share className="h-4 w-4" />
                  Share
                </button>
              </div>
            </article>
          ))}
        </section>

        <aside className="hidden xl:block">
          <div className="rounded-2xl bg-white p-4 shadow-sm">
            <h3 className="mb-3 font-semibold">Contacts</h3>
            <div className="space-y-3">
              {contacts.map((contact) => (
                <div key={contact} className="flex items-center gap-3 rounded-lg p-2 hover:bg-[#f0f2f5]">
                  <div className="relative">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-200 font-semibold">
                      {contact[0]}
                    </div>
                    <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-green-500" />
                  </div>
                  <span className="text-sm font-medium">{contact}</span>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
