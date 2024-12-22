import { Helmet } from "react-helmet";

const PackingGuide = () => {
  return (
    <>
      <Helmet>
        <title>Complete Packing Guide | LiftNHaul</title>
        <meta name="description" content="Room-by-room packing guide with professional tips on how to pack your belongings safely and efficiently for moving." />
        <meta name="keywords" content="packing guide, packing tips, moving boxes, how to pack, moving supplies" />
      </Helmet>

      <div className="container mx-auto px-4 py-8 mt-24">
        <h1 className="text-4xl font-bold text-primary mb-6">Packing Guide</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Essential Packing Supplies</h2>
          <ul className="list-disc pl-6 space-y-3">
            <li>Moving boxes in various sizes</li>
            <li>Packing tape and dispenser</li>
            <li>Bubble wrap and packing paper</li>
            <li>Markers for labeling</li>
            <li>Furniture blankets and padding</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Room-by-Room Guide</h2>
          
          <div className="mb-6">
            <h3 className="text-xl font-medium mb-3">Kitchen</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Pack plates vertically for better protection</li>
              <li>Use cell boxes for glasses and stemware</li>
              <li>Wrap appliances in bubble wrap</li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-medium mb-3">Bedroom</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Use wardrobe boxes for hanging clothes</li>
              <li>Keep clothing in dresser drawers</li>
              <li>Pack shoes individually in original boxes</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pro Packing Tips</h2>
          <ul className="list-disc pl-6 space-y-3">
            <li>Fill boxes completely to prevent collapse</li>
            <li>Keep box weight under 50 pounds</li>
            <li>Label boxes on multiple sides</li>
            <li>Pack an essentials box for first-day items</li>
          </ul>
        </section>
      </div>
    </>
  );
};

export default PackingGuide;