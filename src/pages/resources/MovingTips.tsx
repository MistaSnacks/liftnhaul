import { Helmet } from "react-helmet";

const MovingTips = () => {
  return (
    <>
      <Helmet>
        <title>Essential Moving Tips & Tricks | LiftNHaul</title>
        <meta name="description" content="Expert moving tips and tricks to help you plan and execute your move efficiently. Learn how to make your relocation stress-free." />
        <meta name="keywords" content="moving tips, moving advice, relocation tips, moving checklist, moving organization" />
      </Helmet>

      <div className="container mx-auto px-4 py-8 mt-24">
        <h1 className="text-4xl font-bold text-primary mb-6">Essential Moving Tips</h1>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Planning Your Move</h2>
          <ul className="list-disc pl-6 space-y-3">
            <li>Start planning at least 8 weeks before your move date</li>
            <li>Create a detailed moving checklist and timeline</li>
            <li>Research and book moving companies early</li>
            <li>Begin sorting and decluttering your belongings</li>
            <li>Collect packing supplies well in advance</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Two Weeks Before</h2>
          <ul className="list-disc pl-6 space-y-3">
            <li>Start packing non-essential items</li>
            <li>Transfer utilities and update your address</li>
            <li>Schedule elevator usage if moving from an apartment</li>
            <li>Arrange for pet care during moving day</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Moving Day Tips</h2>
          <ul className="list-disc pl-6 space-y-3">
            <li>Keep important documents and valuables with you</li>
            <li>Pack an essentials box for your first night</li>
            <li>Take photos of electronics before disconnecting</li>
            <li>Label boxes clearly with contents and destination room</li>
          </ul>
        </section>
      </div>
    </>
  );
};

export default MovingTips;