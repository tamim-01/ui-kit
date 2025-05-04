import Button from "@/components/Button/Button";
import Accordion from "@/components/DataDisplay/Accordion";
import Badge from "@/components/DataDisplay/Badge";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from "@/components/DataDisplay/Card";
import Tabs from "@/components/DataDisplay/Tab";
import Container from "@/components/Layout/Container";
import Image from "next/image";

const DisplayExamples = () => {
  return (
    <>
      <Container maxWidth="4xl" padding="lg" className="space-y-12 mt-12">
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
        <section className="space-y-6">
          <h2 className="text-xl font-bold text-primary">Tabs Component</h2>
          <Tabs defaultValue="account" direction="vertical">
            <Tabs.List>
              <Tabs.Trigger value="account">Account</Tabs.Trigger>
              <Tabs.Trigger value="notifications">Notifications</Tabs.Trigger>
              <Tabs.Trigger value="billing">Billing</Tabs.Trigger>
            </Tabs.List>
            <Tabs.Content value="account">
              <p className="text-muted-foreground">
                Update your personal account settings here.
              </p>
            </Tabs.Content>
            <Tabs.Content value="notifications">
              <p className="text-muted-foreground">
                Manage your notification preferences and alerts.
              </p>
            </Tabs.Content>
            <Tabs.Content value="billing">
              <p className="text-muted-foreground">
                View and manage billing history and subscriptions.
              </p>
            </Tabs.Content>
          </Tabs>
        </section>
        <section className="space-y-6">
          <h2 className="text-xl font-bold text-primary">Tabs Component</h2>
          <Tabs defaultValue="account" direction="horizontal" variant="pill">
            <Tabs.List>
              <Tabs.Trigger value="account">Account</Tabs.Trigger>
              <Tabs.Trigger value="notifications">Notifications</Tabs.Trigger>
              <Tabs.Trigger value="billing">Billing</Tabs.Trigger>
            </Tabs.List>
            <Tabs.Content value="account">
              <p className="text-muted-foreground">
                Update your personal account settings here.
              </p>
            </Tabs.Content>
            <Tabs.Content value="notifications">
              <p className="text-muted-foreground">
                Manage your notification preferences and alerts.
              </p>
            </Tabs.Content>
            <Tabs.Content value="billing">
              <p className="text-muted-foreground">
                View and manage billing history and subscriptions.
              </p>
            </Tabs.Content>
          </Tabs>
        </section>
        <section className="space-y-6">
          <h2 className="text-xl font-bold text-primary">Tabs Component</h2>
          <Tabs
            defaultValue="account"
            direction="horizontal"
            variant="underline"
          >
            <Tabs.List>
              <Tabs.Trigger value="account">Account</Tabs.Trigger>
              <Tabs.Trigger value="notifications">Notifications</Tabs.Trigger>
              <Tabs.Trigger value="billing">Billing</Tabs.Trigger>
            </Tabs.List>
            <Tabs.Content value="account">
              <p className="text-muted-foreground">
                Update your personal account settings here.
              </p>
            </Tabs.Content>
            <Tabs.Content value="notifications">
              <p className="text-muted-foreground">
                Manage your notification preferences and alerts.
              </p>
            </Tabs.Content>
            <Tabs.Content value="billing">
              <p className="text-muted-foreground">
                View and manage billing history and subscriptions.
              </p>
            </Tabs.Content>
          </Tabs>
        </section>
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-primary">
            Accordion Component
          </h2>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Default Variant</h3>
            <Accordion title="What is your return policy?" variant="default">
              <p>
                We offer a 30-day return policy. Items must be unused and in
                original packaging. We offer a 30-day return policy. Items must
                be unused and in original packaging. We offer a 30-day return
                policy. Items must be unused and in original packaging.
              </p>
            </Accordion>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Outlined Variant</h3>
            <Accordion title="How long does shipping take?" variant="outlined">
              <p>Orders typically ship within 3–5 business days.</p>
            </Accordion>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Ghost Variant</h3>
            <Accordion
              title="Do you offer international delivery?"
              variant="ghost"
            >
              <p>
                Yes! We deliver to over 50 countries with variable shipping
                times.
              </p>
            </Accordion>
          </div>
        </section>
      </Container>
    </>
  );
};
export default DisplayExamples;
