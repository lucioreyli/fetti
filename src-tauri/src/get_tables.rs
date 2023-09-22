use crate::create_connection::create_connection;

#[tauri::command]
pub fn get_tables(connection: &str) -> bool {
    let origin = create_connection(connection, false).unwrap_or(false);
    println!("{}", origin);
    origin
}
