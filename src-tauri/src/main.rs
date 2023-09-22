#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

mod create_connection;
mod get_tables;
mod test_connection;

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![
            test_connection::test_connection,
            get_tables::get_tables
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
