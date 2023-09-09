use crate::create_connection::create_connection;

#[tauri::command]
pub fn test_connection(name: &str) -> bool {
    let origin = create_connection(name, false).unwrap_or(false);
    println!("origin - {}", origin);
    origin
}
