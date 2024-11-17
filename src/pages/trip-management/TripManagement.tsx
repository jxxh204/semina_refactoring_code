import { Tabs, TabsContent, TabsTrigger, TabsList } from "@/components/ui/tabs";
import * as React from "react";
import BookingForm from "./components/booking-form/BookingForm";
import FlightStatus from "./components/flight-status/FlightStatus";
import CheckInForm from "./components/check-in/CheckInForm";
import MyTrips from "./components/my-trips/MyTrips";

const TripManagement = (): React.ReactElement => {
  return (
    <div className="w-[700px] h-[564px] bg-white rounded-md">
      <Tabs
        defaultValue="book"
        className="flex flex-col"
        orientation="horizontal"
      >
        <div className="flex flex-wrap mb-4">
          <TabsList className="flex-1 bg-transparent rounded-none m-0 p-0">
            <TabsTrigger
              value="book"
              className="flex-1 text-center bg-black m-0 py-2 text-white rounded-none border-b-2 focus:outline-none focus:ring-0 rounded-tl-lg first:rounded-tl-md last:rounded-tr-md"
            >
              Book
            </TabsTrigger>
            <TabsTrigger
              value="status"
              className="flex-1 text-center bg-black m-0 py-2 border-x-neutral-50 text-white rounded-none border-x border-b-2 focus:outline-none focus:ring-0"
            >
              Flight Status
            </TabsTrigger>
            <TabsTrigger
              value="checkin"
              className="flex-1 text-center bg-black m-0 py-2 border-x-neutral-50 text-white rounded-none border-r border-b-2 focus:outline-none focus:ring-0"
            >
              Check-in
            </TabsTrigger>
            <TabsTrigger
              value="trips"
              className="flex-1 text-center bg-black m-0 py-2 text-white rounded-none border-b-2 focus:outline-none focus:ring-0 rounded-tr-lg"
            >
              My Trips
            </TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="book" className="p-4">
          <BookingForm />
        </TabsContent>
        <TabsContent value="status" className="p-4">
          <div className="text-lg font-semibold">Flight Status</div>
          <FlightStatus />
        </TabsContent>
        <TabsContent value="checkin" className="p-4">
          <div className="text-lg font-semibold">Check-in</div>
          <CheckInForm />
        </TabsContent>
        <TabsContent value="trips" className="p-4">
          <div className="text-lg font-semibold">My Trips</div>
          <MyTrips />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export { TripManagement };
