import { Check, X } from "lucide-react";
import type { ComparisonPoint } from "@/types";

interface ComparisonTableProps {
  points: ComparisonPoint[];
  alternativeLabel?: string;
}

function CellValue({ value, isGold }: { value: string; isGold?: boolean }) {
  const lower = value.toLowerCase().trim();
  if (lower === "yes") {
    return (
      <Check
        className={`h-5 w-5 ${isGold ? "text-accent" : "text-text-secondary"}`}
      />
    );
  }
  if (lower === "no") {
    return <X className="h-5 w-5 text-text-muted" />;
  }
  return (
    <span className={isGold ? "text-accent" : "text-text-secondary"}>
      {value}
    </span>
  );
}

export function ComparisonTable({ points, alternativeLabel }: ComparisonTableProps) {
  const altName =
    alternativeLabel || (points.length > 0 ? points[0].alternativeName : "Alternative");

  return (
    <div className="rounded-2xl border border-border overflow-hidden">
      {/* Desktop table */}
      <div className="hidden sm:block">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-bg-elevated">
              <th className="px-6 py-4 text-left font-medium text-text-secondary">
                Feature
              </th>
              <th className="px-6 py-4 text-left font-medium text-accent">
                Gorilla Gold
              </th>
              <th className="px-6 py-4 text-left font-medium text-text-secondary">
                {altName}
              </th>
            </tr>
          </thead>
          <tbody>
            {points.map((point, i) => (
              <tr
                key={point.feature}
                className={`border-t border-border ${
                  i % 2 === 0 ? "bg-bg-secondary" : "bg-bg-primary"
                }`}
              >
                <td className="px-6 py-4 font-medium text-text-primary">
                  {point.feature}
                </td>
                <td className="px-6 py-4">
                  <CellValue value={point.gorillaGold} isGold />
                </td>
                <td className="px-6 py-4">
                  <CellValue value={point.alternative} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile cards */}
      <div className="block sm:hidden divide-y divide-border">
        {points.map((point, i) => (
          <div
            key={point.feature}
            className={`p-4 ${
              i % 2 === 0 ? "bg-bg-secondary" : "bg-bg-primary"
            }`}
          >
            <p className="text-sm font-medium text-text-primary">
              {point.feature}
            </p>
            <div className="mt-3 grid grid-cols-2 gap-3">
              <div>
                <p className="text-xs font-medium text-accent">Gorilla Gold</p>
                <div className="mt-1 text-sm">
                  <CellValue value={point.gorillaGold} isGold />
                </div>
              </div>
              <div>
                <p className="text-xs font-medium text-text-muted">{altName}</p>
                <div className="mt-1 text-sm">
                  <CellValue value={point.alternative} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
