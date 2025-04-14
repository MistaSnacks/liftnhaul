
export interface GoogleReview {
  id: string;
  name: string;
  rating: number;
  text: string;
  time: string;
}

export const googleReviews: GoogleReview[] = [
  {
    id: "review1",
    name: "Michael Thompson",
    rating: 5,
    text: "Lift'n Haul's platform is a game-changer for our logistics operations. The automated dispatch system has significantly reduced our response times, and the real-time tracking feature gives us complete visibility of our fleet. Their customer support team is also incredibly responsive and helpful.",
    time: "2 weeks ago"
  },
  {
    id: "review2",
    name: "Sarah Rodriguez",
    rating: 5,
    text: "We've been using Lift'n Haul for the past six months, and it has transformed how we manage our heavy equipment transportation. The platform is intuitive, and the automated matching system has helped us secure reliable carriers quickly. Highly recommend!",
    time: "3 weeks ago"
  },
  {
    id: "review3",
    name: "David Chen",
    rating: 4,
    text: "Great platform overall. The digital documentation and e-signature features have streamlined our paperwork process significantly. Only minor suggestion would be to add more customization options for reporting. The team is very responsive to feedback though.",
    time: "1 month ago"
  },
  {
    id: "review4",
    name: "Emily Wilson",
    rating: 5,
    text: "As a carrier, Lift'n Haul has been instrumental in helping us grow our business. The load matching algorithm is spot-on, and the payment processing is always prompt and hassle-free. The mobile app makes it easy to manage everything on the go.",
    time: "1 month ago"
  },
  {
    id: "review5",
    name: "James Anderson",
    rating: 4,
    text: "Solid platform for heavy equipment logistics. The automated rate calculation saves us time on negotiations, and the tracking system is reliable. Would like to see more integration options with other fleet management software, but otherwise very satisfied.",
    time: "2 months ago"
  },
  {
    id: "review6",
    name: "Lisa Martinez",
    rating: 5,
    text: "Outstanding service and platform! The AI-powered dispatch system has improved our efficiency by at least 30%. Documentation is seamless, and the analytics dashboard provides valuable insights for our business planning.",
    time: "2 months ago"
  },
  {
    id: "review7",
    name: "Robert Kim",
    rating: 4,
    text: "Very good experience with Lift'n Haul. The platform is reliable and user-friendly. Their support team is knowledgeable and quick to resolve any issues. The only reason for 4 stars is that sometimes the app can be a bit slow during peak hours.",
    time: "3 months ago"
  },
  {
    id: "review8",
    name: "Patricia Hughes",
    rating: 5,
    text: "Lift'n Haul has revolutionized how we handle our equipment transportation needs. The platform's ability to match us with verified carriers quickly has saved us countless hours. The digital BOL and POD system is also a huge plus.",
    time: "3 months ago"
  },
  {
    id: "review9",
    name: "Thomas Baker",
    rating: 5,
    text: "Excellent platform that delivers on its promises. The automated dispatch and real-time tracking have significantly improved our operational efficiency. Their commitment to continuous improvement is evident in the regular updates and new features.",
    time: "4 months ago"
  },
  {
    id: "review10",
    name: "Jennifer Lee",
    rating: 4,
    text: "Reliable and efficient platform. The automated matching system works well, and the documentation process is streamlined. Would love to see more reporting templates added, but overall very satisfied with the service.",
    time: "4 months ago"
  }
];

// Function to sort reviews by date (most recent first)
export const getSortedReviews = (): GoogleReview[] => {
  // Create a mapping for time strings to numerical values
  const timeValueMap: Record<string, number> = {
    "2 weeks ago": 10,
    "3 weeks ago": 9,
    "1 month ago": 8,
    "2 months ago": 7,
    "3 months ago": 6,
    "4 months ago": 5,
    "5 months ago": 4,
    "6 months ago": 3,
    "1 year ago": 2,
    "2 years ago": 1
  };

  // Sort the reviews based on the numerical value of time
  return [...googleReviews].sort((a, b) => {
    const valueA = timeValueMap[a.time] || 0;
    const valueB = timeValueMap[b.time] || 0;
    return valueB - valueA;
  });
};
