
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from "@/components/ui/table";
import { Coins, Phone } from "lucide-react";

export function PriceSection() {
  return (
    <section id="prices" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-purple-900">
            Joyo Coin <span className="text-neon-purple">Price List</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get the best rates for Joyo Poppo coins with transparent pricing
          </p>
        </div>
        
        <Card className="max-w-3xl mx-auto bg-white shadow-lg border-2 border-neon-purple/20 overflow-hidden">
          <CardContent className="p-6">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-12 w-12 rounded-full bg-neon-purple/10 flex items-center justify-center">
                <Phone className="text-neon-purple" />
              </div>
              <div>
                <p className="text-gray-500 text-sm">Contact</p>
                <p className="text-xl font-medium text-gray-800">03287360655</p>
              </div>
            </div>
            
            <Table>
              <TableHeader className="bg-purple-50">
                <TableRow>
                  <TableHead className="text-center text-purple-900 font-bold">Coins</TableHead>
                  <TableHead className="text-center text-purple-900 font-bold">Price (Rs)</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="hover:bg-purple-50">
                  <TableCell className="text-center font-medium flex items-center justify-center">
                    <Coins className="text-neon-purple mr-2 h-5 w-5" /> 16,000
                  </TableCell>
                  <TableCell className="text-center">500</TableCell>
                </TableRow>
                <TableRow className="hover:bg-purple-50">
                  <TableCell className="text-center font-medium flex items-center justify-center">
                    <Coins className="text-neon-purple mr-2 h-5 w-5" /> 32,000
                  </TableCell>
                  <TableCell className="text-center">1,000</TableCell>
                </TableRow>
                <TableRow className="hover:bg-purple-50">
                  <TableCell className="text-center font-medium flex items-center justify-center">
                    <Coins className="text-neon-purple mr-2 h-5 w-5" /> 64,000
                  </TableCell>
                  <TableCell className="text-center">2,000</TableCell>
                </TableRow>
                <TableRow className="hover:bg-purple-50">
                  <TableCell className="text-center font-medium flex items-center justify-center">
                    <Coins className="text-neon-purple mr-2 h-5 w-5" /> 100,000
                  </TableCell>
                  <TableCell className="text-center">3,000</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
