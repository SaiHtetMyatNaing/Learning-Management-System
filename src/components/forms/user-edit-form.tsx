import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { sortedRole } from "@/lib/data";
import { ConstructionRole } from "@/lib/type";


const userSchema = z.object({
  name: z.string().min(5, "Name is required"),
  email: z.string().email("Invalid email address"),
  role: z.enum([
    "All",
    "Subcontractor",
    "Project Manager",
    "Supervisor",
    "Engineer",
    "Architect",
    "Electrician",
    "Estimator",
    "Construction Expeditor",
    "Construction Foreman",
    "Construction Manager",
    "Surveyor",
    "Construction Worker",
  ] ),
});

type UserFormData = z.infer<typeof userSchema>;

const UserUpdateForm = ({name , email , role } : {name : string , email : string , role : ConstructionRole}) => {
  const form = useForm<UserFormData>({
    defaultValues: {
      email,
      name,
      role,
    },
    resolver: zodResolver(userSchema),
  });

  const onSubmit  = (value: z.infer<typeof userSchema>) => {
    console.log(value);
    form.reset();
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Enter Your Name" />
              </FormControl>
              <FormMessage/>
            </FormItem>
          )}
        />

        {/* Email Section */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Enter Your Email Address" />
              </FormControl>
              <FormMessage/>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="role"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Role</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Enter Your Role" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {
                    sortedRole.map((role)=> {
                      if(role.id !== 0)
                      return (
                        <SelectItem key={role.id} value={role.title}>{role.title}</SelectItem>
                    )
                    })
                  }
                </SelectContent>
              </Select>
              <FormMessage/>
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full">Submit</Button>
      </form>
    </Form>
  );
};

export default UserUpdateForm;
