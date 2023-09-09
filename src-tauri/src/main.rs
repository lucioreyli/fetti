#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

mod create_connection;
mod test_connection;

#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}!", name)
}

#[tauri::command]
fn enter_session(name: &str) -> String {
    format!("logged as {}!", name)
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![
            greet,
            enter_session,
            test_connection::test_connection
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
