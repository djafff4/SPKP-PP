import Link from "next/link";
import { Plus, BookOpen, ExternalLink, Calendar } from "lucide-react";
import pool from "@/lib/db";

export const dynamic = "force-dynamic";

interface Magazine {
  id: number;
  title: string;
  slug: string;
  description: string;
  release_date: string | Date;
}

async function getMagazines(): Promise<Magazine[]> {
  try {
    const [rows] = await pool.query("SELECT * FROM majalah ORDER BY release_date DESC");
    return rows as Magazine[];
  } catch (error) {
    console.error("Database error:", error);
    return [];
  }
}

export default async function MajalahManagementPage() {
  const magazines = await getMagazines();

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-zinc-900">Manajemen Majalah Terompet</h1>
          <p className="text-sm text-zinc-500">Publikasikan edisi newsletter baru ke website resmi.</p>
        </div>
        <Link
          href="/dashboard/majalah/tambah"
          className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700"
        >
          <Plus className="h-4 w-4" />
          Post Edisi Baru
        </Link>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {magazines.length === 0 ? (
          <div className="col-span-full py-20 text-center border-2 border-dashed border-zinc-200 rounded-3xl">
            <p className="text-zinc-500">Belum ada edisi majalah yang diterbitkan.</p>
          </div>
        ) : (
          magazines.map((mag) => (
            <div key={mag.id} className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm hover:border-blue-200 transition-colors">
              <div className="flex items-center justify-between mb-4">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <BookOpen className="h-5 w-5" />
                </div>
                <div className="flex items-center gap-1 text-xs text-zinc-400">
                   <Calendar className="h-3 w-3" />
                   {new Date(mag.release_date).toLocaleDateString("id-ID", { month: 'long', year: 'numeric' })}
                </div>
              </div>
              <h3 className="font-bold text-zinc-900 line-clamp-1">{mag.title}</h3>
              <p className="mt-2 text-sm text-zinc-500 line-clamp-2">{mag.description}</p>
              
              <div className="mt-6 flex items-center gap-3 pt-4 border-t border-zinc-50">
                 <Link 
                   href={`/majalah-terompet/${mag.slug}`}
                   target="_blank"
                   className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-700"
                 >
                   <ExternalLink className="h-3 w-3" />
                   Lihat di Web
                 </Link>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
