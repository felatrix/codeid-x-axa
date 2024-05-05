import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from '@/components/ui/dialog';
  import { Button } from '@/components/ui/button';
  import { useForm, SubmitHandler } from 'react-hook-form';
  import { Input } from '@/components/ui/input';
  import { Label } from '@/components/ui/label';
  import { api } from '@/api/api';
  import { useState } from 'react';
  import { useToast } from '@/components/ui/use-toast';
  import { Textarea } from "@/components/ui/textarea"
  
  type Inputs = {
    title: string;
    body: string;
  };
  
  const AddPost = () => {
    const [open, setOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false); // State for loading
    const { toast } = useToast();
  
    const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
    } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = async (data) => {
      try {
        setIsLoading(true);
        const userId = 1;
        const postData = { ...data, userId };
        const newPost = await api.createPost(postData);
        console.log('New post created:', newPost);
        reset();
        setOpen(false);
        toast({
          title: 'Your Post Hasbeen Posted',
        });
      } catch (error) {
        toast({
          title: 'Something wrong',
        });
        console.error('Error creating post:', error);
      } finally {
        setIsLoading(false); 
      }
    };
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger>
          <Button>{isLoading ? 'Loading...' : 'Add Post'}</Button> {/* Display loading or Add Post based on isLoading state */}
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add New Post</DialogTitle>
            <DialogDescription>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="w-full flex flex-col gap-4 mt-4">
                  <div className="flex flex-col w-full items-start gap-1.5">
                    <Label htmlFor="title">Title</Label>
                    <Input
                      className="w-full"
                      {...register('title', { required: true })}
                    />
                    {errors.title && <span>This field is required</span>}
                  </div>
                  <div className="flex flex-col w-full items-start gap-1.5">
                    <Label htmlFor="body">Body</Label>
                    <Textarea 
                      className="w-full"
                      {...register('body', { required: true })}
                    />
                    {errors.body && <span>This field is required</span>}
                  </div>
                  <Button type="submit" disabled={isLoading}> {/* Disable button when loading */}
                    {isLoading ? 'Loading...' : 'Submit'} {/* Display loading or Submit based on isLoading state */}
                  </Button>
                </div>
              </form>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    );
  };
  
  export default AddPost;