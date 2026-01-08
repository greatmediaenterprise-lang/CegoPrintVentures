-- Add UPDATE policy for orders table
CREATE POLICY "Users can update their own orders" 
ON public.orders 
FOR UPDATE 
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);

-- Add DELETE policy for orders table
CREATE POLICY "Users can delete their own orders" 
ON public.orders 
FOR DELETE 
USING (auth.uid() = user_id);