"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import {
  listings as allListings,
  regions,
  type Listing,
} from "@/data/listings";

function formatPrice(value: number, currency: "EUR" | "USD" | "GBP") {
  const symbols = { EUR: "€", USD: "$", GBP: "£" };
  const s = symbols[currency];
  if (value >= 1_000_000)
    return `${s} ${(value / 1_000_000).toFixed(2).replace(/\.00$/, "")}M`;
  return `${s} ${(value / 1_000).toFixed(0)}k`;
}

function ListingCard({ listing }: { listing: Listing }) {
  return (
    <article className="rounded-xl overflow-hidden bg-white dark:bg-slate-800 shadow-md border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow">
      <div className="relative aspect-[4/3]">
        <Image
          src={listing.image}
          alt={listing.imageAlt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <span className="absolute top-3 left-3 rounded-md bg-white/90 dark:bg-slate-900/90 px-2 py-1 text-sm font-medium text-slate-800 dark:text-slate-200 capitalize">
          {listing.type}
        </span>
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          {listing.title}
        </h3>
        <p className="text-slate-600 dark:text-slate-300 text-sm mt-1">
          {listing.location}
        </p>
        <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm text-slate-500 dark:text-slate-400">
          <span>{listing.beds} beds</span>
          <span>{listing.baths} baths</span>
          <span>{listing.sqm} m²</span>
        </div>
        <p className="mt-4 text-slate-700 dark:text-slate-200 font-medium">
          {formatPrice(listing.priceEur, "EUR")} · Prices in USD/GBP on request
        </p>
      </div>
    </article>
  );
}

export function Listings() {
  const [region, setRegion] = useState<string>("all");
  const [type, setType] = useState<string>("all");

  const filtered = useMemo(() => {
    return allListings.filter((l) => {
      if (region !== "all" && l.region !== region) return false;
      if (type !== "all" && l.type !== type) return false;
      return true;
    });
  }, [region, type]);

  return (
    <section id="properties" className="py-20 px-6 bg-white dark:bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-serif font-bold text-slate-900 dark:text-white">
          Properties
        </h2>
        <p className="mt-3 text-slate-600 dark:text-slate-300">
          A selection of current listings. Prices in local currency on request.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <label className="flex items-center gap-2">
            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
              Region
            </span>
            <select
              value={region}
              onChange={(e) => setRegion(e.target.value)}
              className="rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 px-3 py-2 text-slate-900 dark:text-white text-sm"
            >
              <option value="all">All</option>
              {regions.map((r) => (
                <option key={r.id} value={r.id}>
                  {r.label}
                </option>
              ))}
            </select>
          </label>
          <label className="flex items-center gap-2">
            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
              Type
            </span>
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 px-3 py-2 text-slate-900 dark:text-white text-sm"
            >
              <option value="all">All</option>
              <option value="apartment">Apartment</option>
              <option value="house">House</option>
              <option value="villa">Villa</option>
            </select>
          </label>
        </div>

        <ul className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((listing) => (
            <li key={listing.id}>
              <ListingCard listing={listing} />
            </li>
          ))}
        </ul>
        {filtered.length === 0 && (
          <p className="text-slate-500 dark:text-slate-400 text-center py-12">
            No properties match your filters. Try different options.
          </p>
        )}
      </div>
    </section>
  );
}
