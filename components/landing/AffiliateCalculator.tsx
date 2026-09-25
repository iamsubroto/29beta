"use client";

import { useMemo, useState } from "react";

const launchPrice = 29;
const directRate = 0.2;
const commissionPerSubscription = launchPrice * directRate;

function formatUsd(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: value % 1 === 0 ? 0 : 2,
  }).format(value);
}

export function AffiliateCalculator() {
  const [subscriptions, setSubscriptions] = useState(25);
  const potentialCommission = useMemo(
    () => subscriptions * commissionPerSubscription,
    [subscriptions],
  );

  return (
    <div className="rounded-lg border border-cyanGlow/25 bg-panel/75 p-5 shadow-cyan sm:p-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-xs font-black uppercase text-cyanGlow">
            Calculadora rapida
          </p>
          <h3 className="mt-2 text-xl font-black uppercase text-white">
            Suscripciones directas
          </h3>
          <p className="mt-2 text-sm leading-6 text-mist">
            Ajusta el escenario para ver un ejemplo de comision potencial.
          </p>
        </div>
        <div className="rounded-lg border border-limeGlow/25 bg-limeGlow/10 px-4 py-3 text-left sm:text-right">
          <p className="text-xs font-black uppercase text-mist">Comision potencial</p>
          <p className="mt-1 text-3xl font-black text-limeGlow">
            {formatUsd(potentialCommission)}
          </p>
        </div>
      </div>

      <label
        htmlFor="affiliate-subscriptions"
        className="mt-6 block text-sm font-bold text-white"
      >
        Cuantas suscripciones podrias generar?
      </label>
      <div className="mt-4 grid gap-4 sm:grid-cols-[1fr_110px] sm:items-center">
        <input
          id="affiliate-subscriptions"
          type="range"
          min="1"
          max="150"
          value={subscriptions}
          onChange={(event) => setSubscriptions(Number(event.target.value))}
          className="h-2 w-full cursor-pointer appearance-none rounded-full bg-white/10 accent-cyanGlow"
        />
        <input
          type="number"
          min="1"
          max="999"
          value={subscriptions}
          onChange={(event) => {
            const value = Number(event.target.value);
            setSubscriptions(Number.isFinite(value) ? Math.max(1, value) : 1);
          }}
          className="min-h-12 rounded-md border border-white/10 bg-white/[0.04] px-4 text-base font-black text-white outline-none transition focus:border-cyanGlow"
          aria-label="Cantidad de suscripciones"
        />
      </div>

      <div className="mt-5 rounded-lg border border-white/10 bg-white/[0.04] p-4">
        <p className="text-sm font-bold text-white">
          {subscriptions} suscripciones x {formatUsd(commissionPerSubscription)} ={" "}
          <span className="text-limeGlow">{formatUsd(potentialCommission)}</span>
        </p>
        <p className="mt-2 text-xs leading-5 text-mist/80">
          Ejemplo matematico basado en una comision del 20% sobre una suscripcion de
          29 USD. No representa ingresos garantizados.
        </p>
      </div>
    </div>
  );
}
