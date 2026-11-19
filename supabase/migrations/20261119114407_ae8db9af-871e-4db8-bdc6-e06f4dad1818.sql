DROP POLICY IF EXISTS "Authenticated can upload gallery files" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated can upload material files" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated can delete gallery files" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated can delete material files" ON storage.objects;

REVOKE EXECUTE ON FUNCTION public.add_money(numeric) FROM PUBLIC, anon, authenticated;
GRANT EXECUTE ON FUNCTION public.add_money(numeric) TO service_role;

REVOKE EXECUTE ON FUNCTION public.pay_bill(text, numeric, text) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.pay_bill(text, numeric, text) TO authenticated, service_role;

REVOKE EXECUTE ON FUNCTION public.transfer_money(text, numeric, text) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.transfer_money(text, numeric, text) TO authenticated, service_role;