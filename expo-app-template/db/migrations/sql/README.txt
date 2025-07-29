This file contains the information to run and apply the triggers and functions that need to be inserted with SQL into our supabase.

In order to insert a trigger or a function into the current DB you need to follow the following plan:

1. Check if there already is a folder for the type of SQL you are trying to insert manually: trigger, function, policy etc.
2. If there is, go into the folder, if not create folder
3. Then in order to create a new SQL (let's assume we are making a new trigger now) we will make a new file which will have the same name as the migration that we are creating.
    - Let's say our last migration was called 0004_create_new_following_table.sql, then we call the new text file in the sql/trigger -> 0005_creating_name_of_trigger.txt

4. Now in this text file we can put some information about the SQL that we are creating. So let's say we want to create the following trigger. Then our text file could look like this:

========================================================================================================================

This trigger created a profile for every user that is created that calls the function 'on_auth_user_created'

```sql
drop trigger if exists on_auth_user_created on auth.users;

create trigger on_auth_user_created
after insert on auth.users for each row
execute function public.handle_new_user ();

```

============================================================================================================================

5. What we now do is in the migrations folder we create a new file which is the new migration which will have the same name as the text file we just created. So in our case we will create a new file called 0005_creating_name_of_trigger.sql in the migrations folder. 

6. In this new migration file we will put the sql code that we have in the text file.

7. Then we can run the migration with the `npm run db:migrate` command.