-- This trigger created a profile for every user that is created that calls the function 'on_auth_user_created'

drop trigger if exists on_auth_user_created on auth.users;

create trigger on_auth_user_created
after insert on auth.users for each row
execute function public.handle_new_user ();
