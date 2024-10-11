package com.piseth.java.school.phoneshopenight.mapper;

import com.piseth.java.school.phoneshopenight.dto.BrandDTO;
import com.piseth.java.school.phoneshopenight.entity.Brand;
import javax.annotation.processing.Generated;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2024-10-11T13:30:47+0700",
    comments = "version: 1.5.5.Final, compiler: Eclipse JDT (IDE) 3.38.0.v20240524-2033, environment: Java 21.0.4 (Eclipse Adoptium)"
)
public class BrandMapperImpl implements BrandMapper {

    @Override
    public Brand toBrand(BrandDTO dto) {
        if ( dto == null ) {
            return null;
        }

        Brand brand = new Brand();

        if ( dto.getId() != null ) {
            brand.setId( dto.getId().longValue() );
        }
        brand.setName( dto.getName() );

        return brand;
    }

    @Override
    public BrandDTO toBrandDTO(Brand entity) {
        if ( entity == null ) {
            return null;
        }

        BrandDTO brandDTO = new BrandDTO();

        if ( entity.getId() != null ) {
            brandDTO.setId( entity.getId().intValue() );
        }
        brandDTO.setName( entity.getName() );

        return brandDTO;
    }
}
