import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, CheckCircle, Edit, MoreHorizontal, Plus, Search, PenToolIcon as Tool } from "lucide-react"

// Örnek bakım verileri
const maintenances = [
  {
    id: "MT-2025-024",
    machine: "Freze Makinesi #2",
    type: "Periyodik",
    scheduledDate: "20.04.2025",
    assignedTo: "Mehmet Kaya",
    duration: "2 saat",
    status: "Planlandı",
  },
  {
    id: "MT-2025-025",
    machine: "Hidrolik Pres",
    type: "Yağ Değişimi",
    scheduledDate: "21.04.2025",
    assignedTo: "Ali Öztürk",
    duration: "1 saat",
    status: "Planlandı",
  },
  {
    id: "MT-2025-026",
    machine: "Montaj Hattı",
    type: "Genel Kontrol",
    scheduledDate: "22.04.2025",
    assignedTo: "Ayşe Demir",
    duration: "3 saat",
    status: "Planlandı",
  },
  {
    id: "MT-2025-023",
    machine: "CNC Torna #1",
    type: "Periyodik",
    scheduledDate: "15.04.2025",
    assignedTo: "Mehmet Kaya",
    duration: "2 saat",
    status: "Tamamlandı",
  },
  {
    id: "MT-2025-022",
    machine: "Kaynak Robotu",
    type: "Kalibrasyon",
    scheduledDate: "14.04.2025",
    assignedTo: "Zeynep Çelik",
    duration: "4 saat",
    status: "Tamamlandı",
  },
]

// Durum renklerini belirleme fonksiyonu
function getStatusBadge(status: string) {
  switch (status) {
    case "Tamamlandı":
      return <Badge className="bg-green-500">Tamamlandı</Badge>
    case "Planlandı":
      return <Badge className="bg-blue-500">Planlandı</Badge>
    case "Ertelendi":
      return <Badge className="bg-yellow-500">Ertelendi</Badge>
    default:
      return <Badge>{status}</Badge>
  }
}

export default function Maintenance() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Bakım</h1>
        <p className="text-gray-500">Makine bakımlarını planlayın ve takip edin.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Planlanan Bakımlar</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-gray-500">Önümüzdeki 30 gün</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Tamamlanan Bakımlar</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">18</div>
            <p className="text-xs text-gray-500">Son 30 gün</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Bakım Verimliliği</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">94%</div>
            <p className="text-xs text-gray-500">Zamanında tamamlanan bakımlar</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center">
          <div className="grid gap-2">
            <CardTitle>Bakım Planı</CardTitle>
            <CardDescription>Planlanan ve tamamlanan tüm bakımlar.</CardDescription>
          </div>
          <div className="ml-auto flex gap-2">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
              <Input type="search" placeholder="Bakım ara..." className="pl-8 w-[200px]" />
            </div>
            <Select defaultValue="all">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Durum Filtresi" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tüm Durumlar</SelectItem>
                <SelectItem value="scheduled">Planlandı</SelectItem>
                <SelectItem value="completed">Tamamlandı</SelectItem>
                <SelectItem value="postponed">Ertelendi</SelectItem>
              </SelectContent>
            </Select>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Bakım Planla
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Bakım ID</TableHead>
                <TableHead>Makine</TableHead>
                <TableHead>Tür</TableHead>
                <TableHead>Tarih</TableHead>
                <TableHead>Atanan Kişi</TableHead>
                <TableHead>Süre</TableHead>
                <TableHead>Durum</TableHead>
                <TableHead className="text-right">İşlemler</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {maintenances.map((maintenance) => (
                <TableRow key={maintenance.id}>
                  <TableCell className="font-medium">{maintenance.id}</TableCell>
                  <TableCell>{maintenance.machine}</TableCell>
                  <TableCell>{maintenance.type}</TableCell>
                  <TableCell>{maintenance.scheduledDate}</TableCell>
                  <TableCell>{maintenance.assignedTo}</TableCell>
                  <TableCell>{maintenance.duration}</TableCell>
                  <TableCell>{getStatusBadge(maintenance.status)}</TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">İşlemler</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>İşlemler</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                          <Tool className="mr-2 h-4 w-4" />
                          Detaylar
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Edit className="mr-2 h-4 w-4" />
                          Düzenle
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Calendar className="mr-2 h-4 w-4" />
                          Yeniden Planla
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <CheckCircle className="mr-2 h-4 w-4" />
                          Tamamlandı Olarak İşaretle
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
