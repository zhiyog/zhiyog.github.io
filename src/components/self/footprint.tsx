"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Lens } from "@/components/magicui/lens";
import mapPic from "@/assets/map.png";

export function LensSelf() {
  return (
    <Card className="relative shadow-none">
      <CardHeader>
        <CardTitle className="text-2xl">Footprint</CardTitle>
        <CardDescription>Go further on the map, I am a travel beginner</CardDescription>
      </CardHeader>
      <CardContent>
        <Lens zoomFactor={2} lensSize={150} isStatic={false} ariaLabel="Zoom Area">
          <img src={mapPic} alt="map" width={800} height={800} className="mx-auto" />
        </Lens>
      </CardContent>
      <CardFooter className="space-x-4">
        <p>2025 @ Gaode Map</p>
      </CardFooter>
    </Card>
  );
}
