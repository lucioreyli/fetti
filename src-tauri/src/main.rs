#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

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
        .invoke_handler(tauri::generate_handler![greet, enter_session])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
