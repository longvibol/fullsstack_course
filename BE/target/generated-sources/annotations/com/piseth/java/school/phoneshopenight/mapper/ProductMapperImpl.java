package com.piseth.java.school.phoneshopenight.mapper;

import com.piseth.java.school.phoneshopenight.dto.ProductDTO;
import com.piseth.java.school.phoneshopenight.dto.ProductImportDTO;
import com.piseth.java.school.phoneshopenight.entity.Product;
import com.piseth.java.school.phoneshopenight.entity.ProductImportHistory;
import com.piseth.java.school.phoneshopenight.service.ColorService;
import com.piseth.java.school.phoneshopenight.service.ModelService;
import javax.annotation.processing.Generated;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2024-10-30T15:05:54+0700",
    comments = "version: 1.5.5.Final, compiler: javac, environment: Java 22.0.1 (Oracle Corporation)"
)
@Component
public class ProductMapperImpl implements ProductMapper {

    @Autowired
    private ModelService modelService;
    @Autowired
    private ColorService colorService;

    @Override
    public Product toProduct(ProductDTO productDTO) {
        if ( productDTO == null ) {
            return null;
        }

        Product.ProductBuilder product = Product.builder();

        product.model( modelService.getById( productDTO.getModelId() ) );
        product.color( colorService.getById( productDTO.getColorId() ) );

        return product.build();
    }

    @Override
    public ProductImportHistory toProductImportHistory(ProductImportDTO importDTO, Product product) {
        if ( importDTO == null && product == null ) {
            return null;
        }

        ProductImportHistory.ProductImportHistoryBuilder productImportHistory = ProductImportHistory.builder();

        if ( importDTO != null ) {
            productImportHistory.dateImport( importDTO.getImportDate() );
            productImportHistory.pricePerUnit( importDTO.getImportPrice() );
            productImportHistory.importUnit( importDTO.getImportUnit() );
        }
        productImportHistory.product( product );

        return productImportHistory.build();
    }
}
