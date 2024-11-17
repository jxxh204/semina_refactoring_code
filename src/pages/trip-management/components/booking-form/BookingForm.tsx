import * as React from "react";

import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { DatePickerWithRange } from "@/components/form-fields/DatePickerWithRange";
import FormSelect from "@/components/form-fields/FormSelect";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

type BookingFormProps = {};

const BookingForm: React.FC<BookingFormProps> = () => {
  return (
    <div className="space-y-6">
      <Tabs
        defaultValue="flight"
        className="flex flex-col"
        orientation="horizontal"
      >
        <div className="flex flex-wrap mb-4">
          <TabsList className="flex-1 bg-transparent rounded-none m-0 p-0">
            <TabsTrigger
              value="flight"
              className="flex-1 text-center m-0 py-2 border-b border-black rounded-none data-[state=active]:border-b-2"
            >
              Flight
            </TabsTrigger>
            <TabsTrigger
              value="packages"
              className="flex-1 text-center m-0 py-2 border-b border-black rounded-none data-[state=active]:border-b-2"
            >
              Packages
            </TabsTrigger>
            <TabsTrigger
              value="hotel"
              className="flex-1 text-center m-0 py-2 border-b border-black rounded-none data-[state=active]:border-b-2"
            >
              Hotel
            </TabsTrigger>
            <TabsTrigger
              value="car"
              className="flex-1 text-center m-0 py-2 border-b border-black rounded-none data-[state=active]:border-b-2"
            >
              Car
            </TabsTrigger>
            <TabsTrigger
              value="cruise"
              className="flex-1 text-center m-0 py-2 border-b border-black rounded-none data-[state=active]:border-b-2"
            >
              Cruise
            </TabsTrigger>
          </TabsList>
        </div>
      </Tabs>
      {/* Row 1 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Section 1: Radio buttons */}
        <div>
          <RadioGroup>
            <div className="flex items-center space-x-4">
              <RadioGroupItem value="roundtrip" className="flex items-center" />
              <Label className="font-bold">Roundtrip</Label>
              <RadioGroupItem value="oneway" className="flex items-center" />
              <Label className="font-bold">One-way</Label>
            </div>
          </RadioGroup>
        </div>
        {/* Section 2: Checkboxes */}
        <div>
          <div className="flex items-center space-x-4">
            <Label className="flex items-center">
              <Checkbox id="miles" className="mr-2" />
              <Label className="text-sm font-bold">Book with miles</Label>
            </Label>
            <Label className="flex items-center">
              <Checkbox id="flexible-dates" className="mr-2" />
              <Label className="text-sm font-bold">Flexible dates</Label>
            </Label>
          </div>
        </div>
      </div>

      {/* Row 2 */}
      <div className="flex items-center space-x-4">
        <div className="flex-1">
          <Label className="block text-sm mb-2 text-left font-bold">
            From*
          </Label>
          <FormSelect
            label="From*"
            options={[
              { label: "Los Angeles", value: "city1" },
              { label: "New York", value: "city2" },
            ]}
            placeholder="Select a city"
          />
        </div>
        <Label className="text-2xl">→</Label>
        <div className="flex-1">
          <Label className="block text-sm font-bold mb-2 text-left">
            To*
          </Label>
          <FormSelect
            label="To*"
            options={[
              { label: "London", value: "city1" },
              { label: "Madrid", value: "city2" },
            ]}
            placeholder="Select a city"
          />
        </div>
      </div>

      {/* Row 3 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
        <div>
          <Label className="block text-sm font-bold mb-2 text-left w-full">
            Dates*
          </Label>
          <DatePickerWithRange className="mt-2 w-full" />
        </div>
        <div>
          <Label className="block text-sm font-bold mb-2 text-left">
            Travelers
          </Label>
          <FormSelect
            label="Adults*"
            options={[
              { label: "1", value: "1" },
              { label: "2", value: "2" },
              { label: "3", value: "3" },
            ]}
            placeholder="Select"
          />
        </div>
      </div>

      {/* Row 4 */}
      <div>
        <Label className="block text-sm font-bold mb-2 text-left">
          Class
        </Label>
        <FormSelect
          label="Class*"
          options={[
            { label: "Economy", value: "economy" },
            { label: "Business", value: "business" },
          ]}
          placeholder="Select"
        />
      </div>

      {/* Row 5 */}
      <div className="flex flex-col md:flex-row justify-between">
        {/* Left side */}
        <div className="space-y-4">
          <Label className="text-blue-900 font-bold text-left">
            Advanced search
          </Label>
          <div className="text-sm text-left">Lorem ipsum dolor sit amet.</div>
        </div>
        {/* Right side */}
        <div className="flex flex-col space-y-4">
          <Button className="w-full rounded-full bg-blue-700 font-bold">
            Find flights
          </Button>
          <Button className="w-full rounded-full bg-white border-blue-700 border-2 font-bold text-blue-700 hover:text-white" variant={"outline"}>
            Find your travel credits
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
