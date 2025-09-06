package com.aptimaster;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.io.FileReader;
import com.opencsv.CSVReader;
import java.util.Arrays; // <-- import Arrays to fix your earlier compile error

public class CSVImporter {
    public static void main(String[] args) {
        String csvFile = "src/main/resources/data/aptimaster_set1_questions.csv";
        String url = "jdbc:mysql://localhost:3306/aptimasterdb";
        String user = "root";
        String password = "1234";

        try (Connection conn = DriverManager.getConnection(url, user, password);
             CSVReader reader = new CSVReader(new FileReader(csvFile))) {

            String[] line;
            while ((line = reader.readNext()) != null) {
                System.out.println(Arrays.toString(line));
                // here you can add your insert logic
            }

            System.out.println("CSV read successfully!");
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
