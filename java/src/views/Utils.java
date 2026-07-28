/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package views;

import javax.swing.JFrame;
import javax.swing.JPanel;

/**
 *
 * @author Usuario
 */
public class Utils {

    public static void deleteWindows(JFrame jf, JPanel jp) {
        try {
            jf.remove(jp);
            System.out.println("elimine algo");
        } catch (Exception e) {
        }
    }
}
