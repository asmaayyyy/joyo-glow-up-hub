
import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from "@/components/ui/table";

export function PriceSection() {
  return (
    <section id="prices" className="py-4">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4 text-[#1a73e8]">
          Coin Price List
        </h2>
      </div>
      
      <Table className="w-full border-collapse">
        <TableHeader className="bg-[#f9f9f9]">
          <TableRow>
            <TableHead className="text-center text-gray-700 font-bold border border-gray-200 py-3">Coins</TableHead>
            <TableHead className="text-center text-gray-700 font-bold border border-gray-200 py-3">Price (INR)</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow className="hover:bg-gray-50">
            <TableCell className="text-center border border-gray-200 py-3">16,000</TableCell>
            <TableCell className="text-center border border-gray-200 py-3">₹500</TableCell>
          </TableRow>
          <TableRow className="hover:bg-gray-50">
            <TableCell className="text-center border border-gray-200 py-3">32,000</TableCell>
            <TableCell className="text-center border border-gray-200 py-3">₹1,000</TableCell>
          </TableRow>
          <TableRow className="hover:bg-gray-50">
            <TableCell className="text-center border border-gray-200 py-3">64,000</TableCell>
            <TableCell className="text-center border border-gray-200 py-3">₹2,000</TableCell>
          </TableRow>
          <TableRow className="hover:bg-gray-50">
            <TableCell className="text-center border border-gray-200 py-3">100,000</TableCell>
            <TableCell className="text-center border border-gray-200 py-3">₹3,000</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </section>
  );
}
