import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Eye } from "lucide-react"

export function BlogPreviewModal({ blog }) {
    return (
        <Dialog>
            <DialogTrigger asChild className=''>
                <div className="bg-blue-100 px-2 rounded-sm flex justify-center items-center">

                <Eye className="h-4 w-4 text-blue-500" />
                </div>
            </DialogTrigger>
            <DialogContent className="max-w-3xl h-[80vh] overflow-y-scroll">
                <DialogHeader>
                    <DialogTitle>Blog Preview</DialogTitle>

                </DialogHeader>
                <ScrollArea className="h-full pr-4">
                    {blog?.image && (
                        <div className="aspect-video w-full mb-6 rounded-lg overflow-hidden">
                            <img
                                src={blog?.image}
                                alt={blog?.title}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    )}
                    <div className="space-y-4">
                        <h1 className="text-3xl font-bold">{blog?.title}</h1>
                        <div className="text-sm text-muted-foreground">
                            {(blog?.author) ? `By ${blog?.author}` : ''}
                        </div>
                        <p className="text-lg text-muted-foreground">
                            {blog?.short_description}

                        </p>
                        <div
                            className="prose prose-stone max-w-none"
                            dangerouslySetInnerHTML={{ __html: (blog?.main_content) }}
                        />
                    </div>
                </ScrollArea>

            </DialogContent>
        </Dialog>
    )
}
