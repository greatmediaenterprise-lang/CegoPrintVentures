-- Fix critical security vulnerability: Remove public access to users table
-- and replace with user-specific access only

-- Drop the dangerous policy that allows public read access
DROP POLICY IF EXISTS "Enable read access for all users" ON public.users;

-- Create a secure policy that only allows users to read their own data
CREATE POLICY "Users can only read their own data" 
ON public.users 
FOR SELECT 
USING (auth.uid() = id);

-- Ensure the policy is properly applied
COMMENT ON POLICY "Users can only read their own data" ON public.users IS 
'Security policy: Users can only access their own financial data. Prevents unauthorized access to sensitive information including balances, emails, and account numbers.';