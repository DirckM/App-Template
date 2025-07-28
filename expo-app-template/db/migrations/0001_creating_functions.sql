-- Creates a function that inserts a profile entry for every created user
create or replace function public.handle_new_user () returns trigger as $$
begin
  insert into public.profiles (id, created_at, updated_at)
  values (new.id, now(), now());
  return new;
end;
$$ language plpgsql;


-- Sample function that just returns NEW without doing anything
CREATE OR REPLACE FUNCTION public.sample_noop_function()
RETURNS trigger AS $$
BEGIN
  -- This function does nothing but returns the row unchanged
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Another no-op function to demonstrate function creation
CREATE OR REPLACE FUNCTION public.another_noop_function()
RETURNS trigger AS $$
BEGIN
  -- This function is a no-op and returns the row unchanged
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;