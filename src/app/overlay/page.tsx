"use client";
import Button from "@/components/Button/Button";
import Container from "@/components/Layout/Container";
import Drawer from "@/components/Overlay/Drawer";
import Modal from "@/components/Overlay/Modal";
import Popover from "@/components/Overlay/Popover";
import Tooltip from "@/components/Overlay/Tooltip";
import { useState } from "react";

const OverlayExamples = () => {
  const [openModal, setOpenModal] = useState<
    "default" | "danger" | "full" | null
  >(null);
  const [openDrawer, setOpenDrawer] = useState<
    null | "left" | "right" | "top" | "bottom"
  >(null);
  const positions: ("left" | "right" | "top" | "bottom")[] = [
    "left",
    "right",
    "top",
    "bottom",
  ];
  return (
    <Container maxWidth="4xl" padding="lg" className="space-y-12 mt-12">
      <h2 className="text-2xl font-bold text-primary mb-4">
        Modal Component Examples
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="border p-4 rounded-md shadow-sm">
          <h3 className="text-lg font-semibold mb-2">Default Modal</h3>
          <p className="text-sm text-muted-foreground mb-4">
            A standard modal with header, content, and footer actions.
          </p>
          <Button onClick={() => setOpenModal("default")}>Open Modal</Button>
        </div>

        <div className="border p-4 rounded-md shadow-sm">
          <h3 className="text-lg font-semibold mb-2">Danger Modal</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Use this for delete confirmations or destructive actions.
          </p>
          <Button onClick={() => setOpenModal("danger")} variant="destructive">
            Delete Item
          </Button>
        </div>

        <div className="border p-4 rounded-md shadow-sm col-span-full">
          <h3 className="text-lg font-semibold mb-2">Fullscreen Modal</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Covers the full screen for immersive experiences.
          </p>
          <Button onClick={() => setOpenModal("full")} variant="ghost">
            Open Fullscreen Modal
          </Button>
        </div>
      </div>
      <Modal
        open={openModal === "default"}
        onClose={() => setOpenModal(null)}
        header="Default Modal"
        footer={
          <div className="flex justify-end gap-2">
            <Button onClick={() => setOpenModal(null)} variant="secondary">
              Close
            </Button>
            <Button>Confirm</Button>
          </div>
        }
      >
        <p>This is a standard modal with a header, body, and footer.</p>
      </Modal>
      <Modal
        open={openModal === "danger"}
        onClose={() => setOpenModal(null)}
        header="Delete Confirmation"
        variant="danger"
        footer={
          <div className="flex justify-end gap-2">
            <Button onClick={() => setOpenModal(null)} variant="secondary">
              Cancel
            </Button>
            <Button variant="destructive">Delete</Button>
          </div>
        }
      >
        <p>
          Are you sure you want to delete this item? This action is
          irreversible.
        </p>
      </Modal>
      <Modal
        open={openModal === "full"}
        onClose={() => setOpenModal(null)}
        size="full"
        variant="ghost"
        showCloseButton
        header={
          <h2 className="text-2xl w-full font-bold ">Fullscreen Modal</h2>
        }
      >
        <div className="text-center mt-20">
          <p className="text-primary-foreground">
            This modal takes up the entire screen. Great for focused tasks or
            onboarding. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Laborum, nostrum reiciendis! Natus nihil cupiditate ad, id aliquid
            reiciendis, delectus adipisci tempore ipsam dolores voluptate,
            voluptatem dignissimos animi inventore praesentium odit?
          </p>
        </div>
      </Modal>
      <section className="space-y-8 p-4">
        <h2 className="text-xl font-semibold">Popover Examples</h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 place-items-center">
          <Popover
            trigger="click"
            position="top"
            content={<span>This is a top popover</span>}
          >
            <Button>Top - click</Button>
          </Popover>

          <Popover
            trigger="click"
            position="right"
            content={<span>This is a right popover</span>}
          >
            <Button>Right - click</Button>
          </Popover>

          <Popover
            trigger="hover"
            position="bottom"
            content={<span>This is a bottom popover</span>}
          >
            <Button>Bottom - hover</Button>
          </Popover>

          <Popover
            trigger="hover"
            position="left"
            content={<span>This is a left popover</span>}
          >
            <Button>Left - hover</Button>
          </Popover>
        </div>
      </section>
      <section className="space-y-4 p-4">
        <h2 className="text-xl font-semibold">Drawer Positions</h2>

        <div className="flex flex-wrap gap-4">
          {positions.map((pos) => (
            <Button key={pos} onClick={() => setOpenDrawer(pos)}>
              {pos.charAt(0).toUpperCase() + pos.slice(1)}
            </Button>
          ))}
        </div>

        {positions.map((pos) => (
          <Drawer
            key={pos}
            rounded="xl"
            open={openDrawer === pos}
            onClose={() => setOpenDrawer(null)}
            position={pos}
            size="fit"
            outlined
          >
            <div className="p-4 space-y-2">
              <h3 className="text-lg font-medium capitalize">{pos} Drawer</h3>
              <p>This drawer slides in from the {pos} side.</p>
              <Button onClick={() => setOpenDrawer(null)}>Close</Button>
            </div>
          </Drawer>
        ))}
      </section>
      <section className="space-y-4 py-10 p-4">
        <h2 className="text-xl font-semibold">Tooltip components</h2>
        <div className="flex flex-row gap-4">
          <Tooltip content=" on top" position="top">
            <Button variant="secondary">Top</Button>
          </Tooltip>

          <Tooltip content=" on right" position="right">
            <Button variant="secondary">Right</Button>
          </Tooltip>

          <Tooltip content=" on bottom" position="bottom">
            <Button variant="secondary">Bottom</Button>
          </Tooltip>

          <Tooltip content=" on left" position="left">
            <Button variant="secondary">Left</Button>
          </Tooltip>
        </div>
      </section>
    </Container>
  );
};
export default OverlayExamples;
