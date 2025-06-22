-- List all triggers in your database
SELECT
    event_object_table AS table_name,
    trigger_name,
    action_timing,
    event_manipulation,
    action_statement
FROM information_schema.triggers
ORDER BY table_name;

-- List all functions in your database
SELECT
    routine_name,
    routine_type,
    data_type
FROM information_schema.routines
WHERE
    specific_schema NOT IN(
        'pg_catalog',
        'information_schema'
    )
ORDER BY routine_name;