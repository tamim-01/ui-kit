import Button from "@/components/Button/Button";
import Badge from "@/components/DataDisplay/Badge";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from "@/components/DataDisplay/Card";
import ThemeProvider from "@/components/ThemeProvider";
import Image from "next/image";

const page = () => {
  return (
    <>
      <div className="max-w-4xl mx-auto p-6 space-y-12 ">
        <ThemeProvider />
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-primary">Badge Component</h2>

          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Variants</h3>
            <div className="flex flex-wrap gap-3">
              <Badge variant="default">Default</Badge>
              <Badge variant="success">Success</Badge>
              <Badge variant="info">Info</Badge>
              <Badge variant="warning">Warning</Badge>
              <Badge variant="error">Error</Badge>
              <Badge variant="outline">Outline</Badge>
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Sizes</h3>
            <div className="flex flex-wrap gap-3 items-center">
              <Badge size="sm" variant="info">
                Small
              </Badge>
              <Badge size="md" variant="info">
                Medium
              </Badge>
              <Badge size="lg" variant="info">
                Large
              </Badge>
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Rounded: false</h3>
            <div className="flex flex-wrap gap-3">
              <Badge variant="default" rounded={false}>
                Sharp
              </Badge>
              <Badge variant="outline" rounded={false}>
                Outline Sharp
              </Badge>
            </div>
          </div>
        </section>
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-primary">Card Component</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card
              variant="default"
              shadow
              className="hover:shadow-lg transition-shadow relative"
            >
              <Image
                src="/images/image.jpg"
                alt="Placeholder"
                width={412}
                height={100}
              />
              <CardHeader className=" flex justify-between items-center">
                <span>Product Title</span>
                <Badge variant="info">Default</Badge>
              </CardHeader>
              <CardBody className="text-sm text-muted-foreground">
                This product is one of our most popular items. Customers love
                the quality and value.
              </CardBody>
              <CardFooter className="flex justify-between items-center">
                <span className="text-primary font-semibold">$29.99</span>
                <Button>Add to cart</Button>
              </CardFooter>
            </Card>

            <Card
              variant="outlined"
              shadow
              className="hover:border-primary transition-all relative"
            >
              <Image
                src="/images/image.jpg"
                alt="Placeholder"
                width={412}
                height={100}
              />
              <CardHeader className="flex justify-between items-center">
                <span>Blog Post</span>
                <Badge variant="info">outlined</Badge>
              </CardHeader>
              <CardBody className="text-sm">
                Discover how we built a component system from scratch and made
                it reusable across our apps.
              </CardBody>
              <CardFooter>
                <Button>Read More</Button>
              </CardFooter>
            </Card>

            <Card
              variant="ghost"
              className="hover:border-primary transition-all relative"
            >
              <Image
                src="/images/image.jpg"
                alt="Placeholder"
                width={412}
                height={100}
              />
              <CardHeader className="flex justify-between items-center">
                <span>Blog Post</span>
                <Badge variant="info">Ghost</Badge>
              </CardHeader>
              <CardBody className="text-sm">
                Discover how we built a component system from scratch and made
                it reusable across our apps.
              </CardBody>
              <CardFooter>
                <Button>Read More</Button>
              </CardFooter>
            </Card>
          </div>
        </section>
      </div>
    </>
  );
};
export default page;
